<?php
/*
* @link http://kodcloud.com/
* @author warlee | e-mail:kodcloud@qq.com
* @copyright warlee 2014.(Shanghai)Co.,Ltd
* @license http://kodcloud.com/tools/license/license.txt
*/

class computer extends Controller{
	function __construct() {
		parent::__construct();
	}
	public function index() {

		$wap = is_wap() && (!isset($_COOKIE['forceWap']) || $_COOKIE['forceWap'] == '1');
		$config = $this->config;
		$wall = $this->config['user']['wall'];
		if(strlen($wall)<3){
			$wall = STATIC_PATH.'images/wall_page/'.$wall.'.jpg';
		}
		$this->assign('wall',$wall);
		$this->display('index.html');
	}
}
