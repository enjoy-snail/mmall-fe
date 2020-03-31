/*
* @Author: 'weitao'
* @Date:   2020-03-31 20:08:28
* @Last Modified by:   'weitao'
* @Last Modified time: 2020-03-31 20:38:43
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm             = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})