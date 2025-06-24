<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main_Model extends CI_Model{

    public function insert_data($data, $table)
    {
        
        $this->db->insert($table, $data);
        if ($this->db->affected_rows() > 0) {
            $res = $this->db->insert_id();
            $this->insert_log(1,$res, $table);
            return $res;
        } else {
            return false;
        }
    }

    function fetch_inbox(){
        return $this->db->query('SELECT * FROM tbl_contact WHERE status != 0 ORDER BY created_at DESC');
    }

    function fetch_data($table){
        $sql = $this->db->query('SELECT * FROM '. $table .' WHERE status != 0 ORDER BY created_at DESC');
        return $sql->result();
    }

    function fetch_all_data(){
        return [
            'education'     => $this->db->get_where('tbl_education', ['status' => 1, 'is_active' => 1])->result(),
            'experience'    => $this->db->get_where('tbl_exp', ['status' => 1, 'is_active' => 1])->result(),
            'files'         => $this->db->get_where('tbl_files', ['is_active' => 1])->result(),
            'personal_info' => $this->db->order_by('created_at', 'DESC')->get_where('tbl_personal_info', ['status' => 1])->result(),
            'resume'        => $this->db->get_where('tbl_resume', ['status' => 1,'is_active' => 1])->result(),
            'projects'      => $this->db->get_where('tbl_projects', ['status' => 1, 'is_active' => 1])->result(),
            'skills'        => $this->db->get_where('tbl_skills', ['status' => 1, 'is_active' => 1])->result(),
        ];
    }

    function update_active($table, $id, $is_active = 1){
        $this->db->where('id', $id);
        $updated = $this->db->update($table, ['is_active' => $is_active]);
    
        if ($updated) {
            $this->insert_log(2, $id, $table);
        }
    
        return $updated;
    }

    function update_status($table, $id){
        $updated = $this->db->where('id', $id)
                        ->update($table, ['status' => 0]);
        $this->insert_log(2, $id, $table);
        
        if ($updated) {
            $this->insert_log(2, $id, $table);
        }
    
        return $updated;
    }
    
    function update_data($table, $id, $data){
        $this->db->where('id', $id);
        $updated = $this->db->update($table, $data);
        $this->insert_log(2, $id, $table);

        if ($updated) {
            $this->insert_log(2, $id, $table);
        }
    
        return $updated;
    }

    public function get_files($origin, $foreign_id){
        return $this->db->where('origin', $origin)
                        ->where('foreign_id', $foreign_id)
                        ->get('tbl_files')
                        ->result();
    }

    public function delete_file_by_id($file_id, $table){
        
        $this->db->where('id', $file_id);
        $file = $this->db->get('tbl_files')->row();

        if ($file) {
            if (file_exists($file->file_path)) {
                unlink($file->file_path);
            }
            
            $this->db->where('id', $file_id);
            $deleted = $this->db->delete('tbl_files');
            $this->insert_log(3, $file_id, $table);
            return $deleted;
        }
        return false;
    }

    public function check_credentials($username, $password) {
        
        $this->db->where('username', $username);
        $this->db->where('password', $password);
        $query = $this->db->get('tbl_users');

        if ($query->num_rows() == 1) {
            return $query->row();
        } else {
            return false;
        }
    }

    private function insert_log($event, $id, $table){
        $data = array (
            'event_id' => $event,
            'item_id' => $id,
            'tbl_origin' => $table
        );
            $this->db->insert('tbl_logs', $data);
    }


}

?>