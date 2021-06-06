<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Shop extends CI_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('product_model');
        $this->load->model('category_model');
        $this->load->model('setting_model');
    }
    public function index() {
        $kw = $this->setting_model->get_all_keywords();
        $default_images = $this->setting_model->get_all_default_images();
        $categories = $this->category_model->get_all_category();
        $top_products = $this->product_model->get_top_product();
        // 
        $keywords  = array();
        $default_images_arr = array();
        for ($i=0; $i < count($kw); $i++) { 
            $keywords[$kw[$i]->name]  = $kw[$i]->text;
        }
        for ($i=0; $i < count($default_images); $i++) {
            $default_images_arr[$default_images[$i]->name]  = $default_images[$i]->path;
        }
        // $products = $this->product_model->get_all_product();
        $data['keywords'] = $keywords;
        $data['categories'] = $categories;
        $data['top_products'] = $top_products;
        $data['test'] = "QUANG";
        $data['default_images'] = $default_images;
        $data['default_images_arr'] = $default_images_arr;
        // $data['products'] = $products;
        $config['base_url'] = site_url('shop/index');
        $active['title'] = " - Home";
        $this->load->view('layout/head', $data);
        $this->load->view('index', $data);
        $this->load->view('layout/footer', $data);
    }
}
