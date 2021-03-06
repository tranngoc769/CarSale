<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Admin extends My_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('product_model');
        $this->load->model('category_model');
    }
    // Dashboard
    public function index()
    {
        $this->gate_model->admin_gate();
        
        // return;
        // $data['all_request'] = $this->user_model->get_upgrade_requests();
        // $this->load->view('layout/dashboard/header', array('title' => 'Admin Dashboard'));
        // $this->loadSidebar(null, null);
        // $this->load->view('admin/dashboard', $data);
        // $this->load->view('layout/dashboard/footer');
        
        $categories = $this->category_model->get_all_category();
        $total_product = $this->product_model->count_category_products(0);
        $data['total_product'] = $total_product;
        $cate['cur_category'] = -1; 
        $cate['categories'] = $categories;
        $this->load->view('layout/admin_head.php');
        $this->load->view('layout/admin_nav.php');
        $this->load->view('layout/admin_side.php', $cate);
        // 
        $this->load->view('admin/index',$data);
        // 
        $this->load->view('layout/admin_footer.php');
    }
   // Thêm sản phẩm
   public function add_product()
   {
       $this->gate_model->admin_gate();
       $categories = $this->category_model->get_all_category();
       $data['categories'] = $categories;
       $cate['cur_category'] = -1;
       $cate['categories'] = $categories;
       $this->load->view('layout/admin_head.php');
       $this->load->view('layout/admin_nav.php');
       $this->load->view('layout/admin_side.php', $cate);
       // 
       $this->load->view('admin/add_product', $data);
       // 
    //    $this->load->view('layout/admin_footer.php');
   }
   public function add()
   {
      
    $config['upload_path']          = './style/uploads/products/';
    $config['allowed_types']        = 'jpeg|gif|jpg|png';
    $config['max_size']             = 1000;
    $config['max_width']            = 1000000;
    $config['max_height']           = 1000000;
    $this->load->library('upload', $config);
    $err_up = "";
    // 
    $name = $this->input->post("name");
    $price = $this->input->post("price");
    $sale_price = $this->input->post("price");
    $c_id = $this->input->post("category");
    $description = $this->input->post("short");
    $detail = $this->input->post("full");
    $p_id = $this->product_model->create_product(array("name"=>$name,"price"=> $price,"sale_price"=> $sale_price,"c_id"=> $c_id,"description"=> $description,"detail"=> $detail));
    if ($p_id==false){
        $array = array(
            "code" => 400,
            "msg" => "Cannot insert"
        );
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        echo json_encode($array);
        return;
    }
    // 
    $upload_path = "/style/uploads/products/";
    $Uploaded_files = array();
    $full_ok = true;
    for ($i=0; $i <  count($_FILES); $i++) { 
        $path =  $this->upload->do_upload('file'.$i);
        if (!$path){
            $full_ok = false;
        }
        else{
            array_push($Uploaded_files,$upload_path.$path);
        }
    }
    if ($full_ok){
        for ($i=0; $i < count($Uploaded_files); $i++) { 
            $up = array("path"=>$Uploaded_files[$i],"p_id"=> $p_id,"c_id"=> $c_id,"index"=> 0);
            if ($i==0){
                $up["index"] = 1;
            }
            $this->product_model->add_images($up);
        }
    }
    else{
        $array = array(
            "code" => 400,
            "msg" => "Upload images failed"
        );
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        echo json_encode($array);
        return;
    }
    $array = array(
        "code" => 200,
        "msg" => "OK"
    );
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    echo json_encode($array);
    return;
   }

    // 
    public function products()
    {
        $this->gate_model->admin_gate();
        $categories = $this->category_model->get_all_category();
        $c_id = $_GET['id'];
        if (!isset($c_id)){
            $c_id = 0;
        }
        $page = $_GET['page'];
        if (!isset($page)){
            $page = 1;
        }
        $orderby = $_GET['orderby'];
        if (!isset($orderby)){
            $orderby = "asc";
        }
        $limit = 2;
        $products = $this->product_model->get_cate_product($c_id,$page, $limit, $orderby);
        $categories = $this->category_model->get_all_category();
        $total_product_category = $this->product_model->count_category_products($c_id);
        $total_page = ceil($total_product_category  / $limit);
        $cate['cur_category'] = $c_id; 
        $cate['categories'] = $categories;
        $data['products'] = $products;
        $data['page'] = $page;
        $data['total'] = $total_page;
        $this->load->view('layout/admin_head.php');
        $this->load->view('layout/admin_nav.php');
        $this->load->view('layout/admin_side.php', $cate);
        // 
        $data['categories'] = $categories;
        $this->load->view('admin/products', $data);
        $this->load->view('layout/admin_footer.php');
    }
    public function categories()
    {
        $this->gate_model->admin_gate();
        $categories = $this->category_model->get_all_category();
        $cate['categories'] = $categories;
        $this->load->view('layout/admin_head.php');
        $this->load->view('layout/admin_nav.php');
        $this->load->view('layout/admin_side.php', $cate);
        // 
        $data['categories'] = $categories;
        $this->load->view('admin/categories', $data);
        $this->load->view('layout/admin_footer.php');
    }
    function delete_category(){
        $c_id = $this->input->post('c_id');
        $is_user = $this->category_model->checkUseCategory($c_id);
        $array = array(
            "code" => 400,
            "msg" => "Cannot insert"
        );
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        echo json_encode($array);
        return;
    }
    

    // Danh sách mục vhi
    public function dsmucchi()
    {
        $this->gate_model->admin_gate();
        $categories = $this->product_model->get_all_product();
        $data['categories'] = $categories;
        $this->load->view('layout/head');
        $this->load->view('layout/side');
        $this->load->view('admin/products', $data);
    }
    
    // Them loai dv
    public function loaidv()
    {
        $this->gate_model->admin_gate();
        $this->load->view('layout/head');
        $this->load->view('layout/side');
        $data['link'] = "/index.php/admin/themloaidv";
        $this->load->view('admin/add_category', $data);
    }
    // Post them loai dv
    public function themloaidv(){
        $this->gate_model->admin_gate();
        $data['name'] = $this->input->post('name');
        $insert = $this->category_model->create_category($data);
        if ($insert){
            redirect('admin/dichvu');
            return;
        }
        echo ("cannot insert");
    }
    // Post thêm mục chi
    public function themmucchi(){
        $this->gate_model->admin_gate();
        $data['pname'] = $this->input->post('name');
        $data['cid'] = $this->input->post('category');
        $data['price1'] = $this->input->post('price1');
        $data['price2'] = $this->input->post('price2');
        $data['price3'] = $this->input->post('price3');
        $data['price4'] = $this->input->post('price4');
        $insert = $this->product_model->create_product($data);
        if ($insert){
            redirect('admin/dsmucchi');
            return;
        }
        echo ("cannot insert");
    }
    // DS dịch vụ
    public function dichvu()
    {
        $this->gate_model->admin_gate();
        $categories = $this->category_model->get_all_category();
        $data['categories'] = $categories;
        $this->load->view('layout/head');
        $this->load->view('layout/side');
        $this->load->view('admin/categories', $data);
    }
        // DS dịch vụ
    public function email($page = 1)
    {
        $limit = 5;
        $offset = ($page-1)*$limit;
        $this->gate_model->admin_gate();
        $total = ceil($this->account_model->count_all_email()/$limit);
        $email = $this->account_model->get_all_email_paging($offset, $limit);
        $data['email'] = $email;
        $data['total'] = $total;
        $data['current'] = $page;
        $this->load->view('layout/head');
        $this->load->view('layout/side');
        $this->load->view('admin/email',$data);
    }
    public function xoadichvu($id)
    {
        $this->gate_model->admin_gate();
        $this->gate_model->admin_gate();
        $is_used = $this->category_model->checkUseCategory($id);
        if (!$is_used){
            $res = $this->category_model->delete_category($id);
        }
        return redirect('/admin/dichvu');
    }
    public function xoamucchi($id)
    {
        $this->gate_model->admin_gate();
        // $is_used = $this->category_model->checkUseCategory($id);
        // if (!$is_used){
            $res = $this->product_model->delete_product($id);
        // }
        return redirect('/admin/mucchi');
    }
    public function suadichvu($id)
    {
        $this->gate_model->admin_gate();
        $categories = $this->category_model->get_category_id($id);
        if (count($categories)>0){
            $data['category'] = $categories[0];
        }
        $this->load->view('layout/head');
        $this->load->view('layout/side');
        $data['link'] = "/index.php/admin/updateloaidv";
        $this->load->view('admin/add_category', $data);
    }
    public function updateloaidv()
    {
        $data['id'] = $this->input->post('id');
        $data['name'] = $this->input->post('name');
        $insert = $this->category_model->update_category($data['id'],$data);
        return redirect('/admin/dichvu');
    }
    // 
    public function download(){
        $data = $this->account_model->get_all_email();
        $data_a = json_encode($data);
        echo(json_encode($data));
        return;
    }
    public function xoaemail($sdt){
        $insert = $this->account_model->xoaemail($sdt);
        return redirect('/admin/email');
    }
}
