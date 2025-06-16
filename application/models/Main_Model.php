<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main_Model extends CI_Model{

    public function insert_data($data, $table_name, $log_data)
    {
        $this->db->insert($table_name, $data);
        if ($this->db->affected_rows() > 0) {
            return $this->db->insert_id();
        } else {
            return false;
        }
    }

    function fetch_inbox(){
        return $this->db->query('SELECT * FROM tbl_contact WHERE status != 0 ORDER BY created_at DESC');
    }

    function fetch_data($table_name)
    {
        $sql = $this->db->query('SELECT * FROM '. $table_name .' WHERE status != 0 ORDER BY created_at DESC');
        return $sql->result();
    }

    function fetch_all_data()
    {
        return [
            'education'     => $this->db->get_where('tbl_education', ['status' => 1, 'is_active' => 1])->result(),
            'experience'    => $this->db->get_where('tbl_exp', ['status' => 1, 'is_active' => 1])->result(),
            'files'         => $this->db->get_where('tbl_files', ['is_active' => 1])->result(),
            'personal_info' => $this->db->get_where('tbl_personal_info', ['status' => 1])->result(),
            'projects'      => $this->db->get_where('tbl_projects', ['status' => 1, 'is_active' => 1])->result(),
            'skills'        => $this->db->get_where('tbl_skills', ['status' => 1, 'is_active' => 1])->result(),
        ];
    }

    function update_active($table, $id, $is_active = 1){
        $this->db->where('id', $id);
        return $this->db->update($table, ['is_active' => $is_active]);
    }

    function update_status($table, $id){
        return $this->db->where('id', $id)->update($table, ['status' => 0]);
    }

    function update_data($data, $table, $id)
    {
    // if (!$table || !$id || empty($data)) {
    //     return false;
    // }

    // $this->db->where('id', $id);
    // return $this->db->update($table, $data)->result();

    $sql = "UPDATE $table SET institution_name = ?, education_level = ?, acad_year = ?, institution_desc = ? WHERE id = ? ";
    $result = $this->db->query($sql, array($data['institution_name'], $data['education_level'], $data['acad_year'], $data['institution_desc'], $id));
    return $result;
    }

}

?>