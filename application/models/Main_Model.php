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
        return $this->db->query("SELECT * FROM " . $table_name . " WHERE status != 0 ORDER BY created_at DESC LIMIT 1");
    }
}

?>