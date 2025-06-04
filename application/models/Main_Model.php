<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main_Model extends CI_Model{

    function insert_data($data, $table_name ,$log_data){
        $this->db->insert($table_name, $data);
        return;
    }

    function fetch_inbox(){
        return $this->db->query('SELECT * FROM tbl_contact WHERE status != 0 ORDER BY created_at DESC');
    }
}

?>