(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,o){"use strict";o.r(e);var a=o(0),t=o.n(a),i=o(5),m=o.n(i),l=o(1),c=o(6),u=function(n){var e=Object(a.useState)(n.data),o=Object(l.a)(e,2),i=o[0],m=(o[1],"@ntq-solution.com.vn"),u=function(n){for(var e=Math.floor(n.length/40),o=n.length-40*e,a=[],t=0;t<e;t++)a.push(n.slice(40*t,40*(t+1)));return 0!=o&&a.push(n.slice(40*e,40*e+o)),a},r=Object(a.useState)(u(i)),h=Object(l.a)(r,2),s=h[0],d=h[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),b=v[0],j=v[1],p=Object(a.useState)(""),q=Object(l.a)(p,2),T=q[0],E=q[1],H=Object(a.useState)(""),D=Object(l.a)(H,2),y=D[0],f=D[1],N=Object(a.useState)(0),S=Object(l.a)(N,2),_=S[0],A=S[1],C=/\d+/,M=Object(a.useState)(""),V=Object(l.a)(M,2),L=V[0],B=V[1],I=Object(a.useState)("name"),O=Object(l.a)(I,2),P=O[0],w=O[1],x=function(n,e){var o=[];i.forEach(function(a){a[e].toString().toUpperCase().trim().includes(n.toUpperCase())&&o.push(a)}),A(0),d(u(o))};return t.a.createElement("div",{className:"main"},t.a.createElement("div",{className:"main__control"},t.a.createElement("div",{className:"control__title"},t.a.createElement("div",{style:{maxWidth:"45%",display:"flex",justifyContent:"space-between"}},t.a.createElement("label",{style:{fontSize:"1.4rem"}},"Name"),t.a.createElement("input",{onChange:function(n){j(n.target.value)},onBlur:function(){f(b?function(n){var e,o=[],a=(e=n.toLowerCase(),e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\s+/g," ")).trim()).replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).split(" "),t=0,l=1===a.length?"".concat(a[0]):"".concat(a[a.length-1],".").concat(a[0]);return i.forEach(function(n){Number(n.email.toString().match(C))>0&&n.email.toString()==="".concat(l).concat(n.email.toString().match(C)).concat(m)?(o.push(Number(n.email.toString().match(C))),t=Math.max.apply(null,o)+1):n.email.toString()==="".concat(l).concat(m)&&0==t&&t++}),0===t?l+m:l+t+m}(b):"")},value:b})),t.a.createElement("div",{style:{maxWidth:"45%",display:"flex",justifyContent:"space-between"}},t.a.createElement("label",{style:{fontSize:"1.4rem"}},"Job"),t.a.createElement("input",{onChange:function(n){E(n.target.value)},value:T})),t.a.createElement("div",{style:{maxWidth:"45%",display:"flex",justifyContent:"space-between"}},t.a.createElement("label",{style:{fontSize:"1.4rem"}},"Email"),t.a.createElement("input",{value:y}))),t.a.createElement("button",{className:"btnAddMember",onClick:function(){""!==y&&""!==b&&""!==T&&(i.unshift({id:Object(c.v4)(),name:b,job:T,email:y}),d(u(i)),f(""),E(""),j(""),A(0),B(""))}},"Add Member Here"),t.a.createElement("div",{className:"control"},t.a.createElement("div",{className:"control__search"},t.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(n){x(n.target.value,P),B(n.target.value)},value:L}),t.a.createElement("select",{onChange:function(n){w(n.target.value),x(L,n.target.value)}},t.a.createElement("option",{value:"name"},"Search for Name"),t.a.createElement("option",{value:"job"},"Search for Job"),t.a.createElement("option",{value:"email"},"Search for Email")),t.a.createElement("button",null,t.a.createElement("i",{className:"fas fa-search"}))),t.a.createElement("div",{className:"control-select"},t.a.createElement("div",{className:"control-select__filter"},t.a.createElement("select",{onChange:function(n){var e=[];s.forEach(function(n){e=e.concat(n)}),e.sort(function(e,o){return e.email.toString().trim().split(".")[0]<o.email.toString().trim().split(".")[0]?"increase"===n.target.value&&-1:e.email.toString().trim().split(".")[0]>o.email.toString().trim().split(".")[0]?"decrease"===n.target.value&&-1:void 0}),d(u(e))}},t.a.createElement("option",{style:{display:"none"}},"Filter"),t.a.createElement("option",{value:"increase"},"T\xean A - Z"),t.a.createElement("option",{value:"decrease"},"T\xean Z - A"))),t.a.createElement("div",{className:"control-select__pages"},t.a.createElement("div",{className:"page-number"},t.a.createElement("span",{className:"page-number__value"},"Page ".concat(_+1)),t.a.createElement("span",{className:"btn-control"},t.a.createElement("button",{onClick:function(){_>0&&_<=s.length-1&&A(_-1)}},t.a.createElement("i",{className:"fas fa-angle-left"})),t.a.createElement("button",{onClick:function(){_<s.length-1&&A(_+1)}},t.a.createElement("i",{className:"fas fa-angle-right"}))),t.a.createElement("span",{className:"btn-control btn-tablist"},t.a.createElement("button",null,t.a.createElement("i",{className:"fas fa-th-large"})),t.a.createElement("button",null,t.a.createElement("i",{className:"fas fa-list"})))))))),t.a.createElement("div",{className:"main__content"},t.a.createElement("div",{className:"content-employee__list"},0!==s.length&&s[_].map(function(n){return t.a.createElement("div",{className:"content-employee__item",key:n.id},t.a.createElement("div",{className:"employ-item"},t.a.createElement("div",{className:"employee-img"},t.a.createElement("h1",{style:{fontSize:"25px"}},!1!==n.email?n.email.toString().split("")[0].toUpperCase():n.name.split(" ")[n.name.split(" ").length-1].split("")[0].toUpperCase()),t.a.createElement("p",{className:"employee-img__connect"},t.a.createElement("i",{className:"fas fa-comments"}),"15",t.a.createElement("i",{className:"fas fa-users"}),"23")),t.a.createElement("div",{className:"employee-info"},t.a.createElement("p",{className:"employee-info__name"},n.name),t.a.createElement("ul",{className:"employee-info__job"},t.a.createElement("li",null,n.job)),t.a.createElement("p",{className:"employee-info__email"},t.a.createElement("i",{className:"fas fa-envelope"})," ",n.email),t.a.createElement("button",{className:"employee-follow__btn"},"Follow"))))}))))},r=function(){return t.a.createElement("div",{className:"sidebar"},t.a.createElement("div",{className:"sidebar__logo"},t.a.createElement("a",{href:"#"},t.a.createElement("img",{src:"./img/company_logo.png",alt:""}))),t.a.createElement("div",{className:"sidebar__menu"},t.a.createElement("ul",{className:"menu"},t.a.createElement("li",null,t.a.createElement("a",{href:"#"},"Employees"),t.a.createElement("ul",{className:"submenu"},t.a.createElement("li",null,t.a.createElement("a",{href:"#"},"Employees")),t.a.createElement("li",null,t.a.createElement("a",{href:"#"},"Adjust Employees")),t.a.createElement("li",null,t.a.createElement("a",{href:"#"},"Members Birthday")))),t.a.createElement("li",null,t.a.createElement("a",{href:"#"},"Departments")),t.a.createElement("li",null,t.a.createElement("a",{href:"#"},"Termination Request")))),t.a.createElement("div",{className:"sidebar__footer"},t.a.createElement("p",null,"Powered by ",t.a.createElement("a",{href:"#",className:"sidebar__footer--bold"},"Odoo"))))},h=function(){return t.a.createElement("div",{className:"app"},t.a.createElement(r,null),t.a.createElement(u,{data:[{id:5345,name:"\u0110\u1eb7ng Th\u1ecb Minh H\xf2a",email:"hoa.dang1@ntq-solution.com.vn",job:"BA"},{id:4602,name:"\u0110\u1eb7ng Th\u1ecb M\u1ef9 Linh",email:"linh.dang1@ntq-solution.com.vn",job:"Tester"},{id:4886,name:"\u0110\u1eb7ng Th\u1ecb Ng\u1ecdc",email:"ngoc.dang1@ntq-solution.com.vn",job:"Developer"},{id:4972,name:"\u0110\u1eb7ng Trung D\u0169ng",email:"dung.dang@ntq-solution.com.vn",job:"Developer"},{id:5522,name:"\u0110\u1eb7ng Trung Ki\xean",email:"kien.dang@ntq-solution.com.vn",job:"Intern"},{id:3415,name:"\u0110\u1eb7ng Tu\u1ea5n Ho\xe0ng",email:"hoang.dang1@ntq-solution.com.vn",job:"Engineer"},{id:5026,name:"\u0110\u1eb7ng V\u0103n Duy",email:"duy.dang1@ntq-solution.com.vn",job:"Developer"},{id:4951,name:"\u0110\u1eb7ng V\u0103n Long",email:"longdv@2-b.io",job:"Developer"},{id:3168,name:"\u0110\u1eb7ng V\u0103n Nam",email:"nam.dang@ntq-solution.com.vn",job:"PM"},{id:1613,name:"\u0110\u1eb7ng V\u0103n Ngh\u0129a",email:"nghia.dang@ntq-solution.com.vn",job:"Developer"},{id:4830,name:"\u0110\xe0o Huy\u1ec1n Ph\u01b0\u01a1ng",email:"phuong.dao1@ntq-solution.com.vn",job:"Admin"},{id:5539,name:"\u0110\xe0o Ng\u1ecdc Huy\u1ec1n",email:"huyen.dao@ntq-solution.com.vn",job:"Accountant"},{id:5538,name:"\u0110\xe0o Thanh Tu\u1ea5n",email:"tuan.dao@ntq-solution.com.vn",job:"Product Manager"},{id:4558,name:"\u0110\xe0o Th\u1ecb B\xecnh",email:"binh.dao@ntq-solution.com.vn",job:"Developer"},{id:5871,name:"\u0110\xe0o Th\u1ecb C\u1ea9m Nhung",email:"nhung.dao@ntq-solution.com.vn",job:"Intern"},{id:4593,name:"\u0110\xe0o Th\u1ecb H\u1eb1ng",email:"hang.dao2@ntq-solution.com.vn",job:"BPO"},{id:2752,name:"\u0110\xe0o Th\u1ecb Hu\u1ebf",email:"hue.dao@ntq-solution.com.vn",job:"Tester"},{id:4737,name:"\u0110\xe0o Th\u1ecb Ninh B\xecnh",email:"binh.dao1@ntq-solution.com.vn",job:"Tester"},{id:1250,name:"\u0110\xe0o Th\u1ecb Th\u1ea3o",email:"thao.dao@ntq-solution.com.vn",job:"PM"},{id:4466,name:"\u0110\xe0o Th\u1ecb Th\u1ea3o 1",email:"thao.dao1@ntq-solution.com.vn",job:"Tester"},{id:3742,name:"\u0110\xe0o Th\u1ecb Ti\xean",email:"tien.dao@ntq-solution.com.vn",job:"Comtor"},{id:5093,name:"\u0110\xe0o Th\u1ecb V\xe2n Anh",email:"anh.dao2@ntq-solution.com.vn",job:"BA"},{id:5862,name:"\u0110\xe0o Trung \u0110\u1ee9c",email:"duc.dao1@ntq-solution.com.vn",job:"Intern"},{id:3789,name:"\u0110\xe0o V\u0103n Huy",email:"huy.dao@ntq-solution.com.vn",job:"Team Leader"},{id:5914,name:"\u0110\xe0o V\u0103n L\u1ee3i",email:"loi.dao@ntq-solution.com.vn",job:"Intern"},{id:4974,name:"\u0110\xe0o V\u0103n Tuy\xean",email:"tuyen.dao@ntq-solution.com.vn",job:"Developer"},{id:4981,name:"\u0110inh Duy Hi\u1ec7p",email:"hiep.dinh@ntq-solution.com.vn",job:"Developer"},{id:5143,name:"\u0110inh Ho\xe0ng S\u01a1n",email:"son.dinh@ntq-solution.com.vn",job:"Developer"},{id:4367,name:"\u0110inh H\u1ed3ng Tranh",email:"tranh.dinh@ntq-solution.com.vn",job:"BA"},{id:4798,name:"\u0110inh Minh \u0110\u1ee9c",email:"duc.dinh@ntq-solution.com.vn",job:"Developer"},{id:3890,name:"\u0110inh Ng\u1ecdc Trung",email:"trung.dinh@ntq-solution.com.vn",job:"Developer"},{id:3632,name:"\u0110inh Nguy\u1ec5n Tr\xed Hi\u1ebfu",email:"hieu.dinh@ntq-solution.com.vn",job:"Developer"},{id:5060,name:"\u0110inh Ph\u01b0\u01a1ng Nhi",email:"nhi.dinh@reco-vn.com",job:"Recruiter Executive"},{id:5079,name:"\u0110inh Th\xe0nh Chung",email:"chung.dinh@ntq-solution.com.vn",job:"BA"},{id:5616,name:"\u0110inh Thanh Huy\u1ec1n",email:"huyen.dinh@ntq-solution.com.vn",job:"Intern"},{id:3720,name:"\u0110inh Th\u1ebf Anh",email:"anh.dinh2@ntq-solution.com.vn",job:"IT"},{id:5860,name:"\u0110inh Th\u1ebf Nam",email:"nam.dinh@ntq-solution.com.vn",job:"Intern"},{id:1648,name:"\u0110inh Th\u1ecb Hoa",email:"hoa.dinh@ntq-solution.com.vn",job:"PM"},{id:5903,name:"\u0110\u1ec9nh Th\u1ecb L\xfd",email:"ly.dinh@ntq-solution.com.vn",job:"Tester"},{id:5708,name:"\u0110inh Th\u1ecb Qu\u1ef3nh Ch\xe2m",email:"cham.dinh@ntq-solution.com.vn",job:"Comtor"},{id:1251,name:"\u0110inh Th\u1ecb Thu H\u01b0\u01a1ng",email:"huong.dinh.thu@ntq-solution.com.vn",job:"Marketing"},{id:5778,name:"\u0110inh Th\xfay H\u1eb1ng",email:"hang.dinh@ntq-solution.com.vn",job:"Account Manager"},{id:5253,name:"\u0110inh Ti\u1ebfn B\u1ed9",email:"bo.dinh@ntq-solution.com.vn",job:"Developer"},{id:5843,name:"\u0110inh V\u0103n Y\xean",email:"yen.dinh@ntq-solution.com.vn",job:"Developer"},{id:4819,name:"\u0110o\xe0n \u0110\u1ee9c Th\u1eafng",email:"thang.doan@ntq-solution.com.vn",job:"Developer"},{id:4860,name:"\u0110o\xe0n H\u1ed3ng H\xe0",email:"ha.doan@ntq-solution.com.vn",job:"Developer"},{id:5132,name:"\u0110o\xe0n H\u1ed3ng Nhung",email:"nhung.doan@reco-vn.com",job:"Sales"},{id:4991,name:"\u0110o\xe0n H\u1eefu T\xfa",email:"tu.doan@ntq-solution.com.vn",job:"Developer"},{id:4488,name:"\u0110o\xe0n Th\u1ebf H\u01b0ng",email:"hung.doan@ntq-solution.com.vn",job:"Developer"},{id:4093,name:"Do\xe3n Th\u1ecb Hi\u1ec1n",email:"hien.doan@ntq-solution.com.vn",job:"Developer"},{id:5775,name:"\u0110o\xe0n Th\u1ecb Hi\u1ec1n",email:"hien.doan1@ntq-solution.com.vn",job:"Tester"},{id:5349,name:"\u0110o\xe0n Th\u1ecb Minh Anh",email:"anh.doan@ntq-solution.com.vn",job:"Intern"},{id:5325,name:"\u0110o\xe0n Th\u1ecb Ph\u01b0\u1ee3ng",email:"phuong.doan@ntq-solution.com.vn",job:"QA"},{id:4680,name:"\u0110o\xe0n Th\u1ecb Thu Th\u1ea3o",email:"thao.doan1@ntq-solution.com.vn",job:"Admin"},{id:5281,name:"\u0110o\xe0n Th\u1ecb Trang",email:"trang.doan@reco-vn.com",job:"Sale Admin"},{id:5470,name:"\u0110o\xe0n Tr\u1ea7n Hi\u1ebfu",email:"hieu.doan@ntq-solution.com.vn",job:"Intern"},{id:4977,name:"\u0110o\xe0n Trung Th\xe0nh",email:"thanh.doan@ntq-solution.com.vn",job:"Developer"},{id:5826,name:"\u0110o\xe0n V\u0103n Qu\xe2n",email:"quan.doan@ntq-solution.com.vn",job:"Developer"},{id:5123,name:"\u0110o\xe0n V\u0103n S\u01a1n",email:"son.doan@ntq-solution.com.vn",job:"Developer"},{id:3470,name:"\u0110o\xe0n V\u0169 Tr\u01b0\u1eddng L\xe2m",email:"lam.doan@ntq-solution.com.vn",job:"Developer"},{id:1254,name:"\u0110o\xe0n Xu\xe2n Huy",email:"huy.doan@ntq-solution.com.vn",job:"Developer"},{id:4957,name:"\u0110\u1ed7 \u0110\u01b0\u1eddng Long",email:"long.do@ntq-solution.com.vn",job:"Developer"},{id:1255,name:"\u0110\u1ed7 H\u1ed3ng Anh",email:"anh.do@ntq-solution.com.vn",job:"BrSE"},{id:2837,name:"\u0110\u1ed7 H\u1ed3ng Qu\xe2n",email:"quan.do1@ntq-solution.com.vn",job:"Sales"},{id:4931,name:"\u0110\u1ed7 H\u1eefu Th\u1ecbnh",email:"thinh.do@ntq-solution.com.vn",job:"Developer"},{id:4113,name:"\u0110\u1ed7 Huy\u1ec1n Anh",email:"anh.do5@ntq-solution.com.vn",job:"Tr\u1ee3 l\xfd "},{id:1522,name:"\u0110\u1ed7 Minh H\u1ea3i",email:"hai.do@ntq-solution.com.vn",job:"Developer"},{id:5425,name:"\u0110\u1ed7 Minh Nhi\xean",email:"nhien.do@ntq-solution.com.vn",job:"Developer"},{id:1556,name:"\u0110\u1ed7 Minh Qu\xfd",email:"quy.do@ntq-solution.com.vn",job:"PM"},{id:2542,name:"\u0110\u1ed7 N\u0103ng Tr\u01b0\u1eddng",email:"truong.do@ntq-solution.com.vn",job:"Developer"},{id:5263,name:"\u0110\u1ed7 Ng\u1ecdc Long",email:"long.do1@ntq-solution.com.vn",job:"Intern"},{id:3553,name:"\u0110\u1ed7 Ng\u1ecdc T\xe0i",email:"tai.do@ntq-solution.com.vn",job:"Developer"},{id:3204,name:"\u0110\u1ed3ng Tuy\u1ebft Nhung",email:"nhung.dong@ntq-solution.com.vn",job:"Recruiter Leader"},{id:4421,name:"\u0110\u1ed7 Nh\u01b0 Qu\u1ef3nh",email:"quynh.do@reco-vn.com",job:"Career Consulting"},{id:5415,name:"\u0110\u1ed7 Th\u1ebf Ch\xednh",email:"chinh.do1@ntq-solution.com.vn",job:"Developer"},{id:4420,name:"\u0110\u1ed7 Th\u1ecb B\xedch Ng\u1ecdc",email:"ngoc.do@reco-vn.com",job:"Career Consulting"},{id:5056,name:"\u0110\u1ed7 Th\u1ecb B\xecnh",email:"binh.do1@reco-vn.com",job:"Recruiter Executive"},{id:4634,name:"\u0110\u1ed7 Th\u1ecb Dung 1",email:"dung.do1@ntq-solution.com.vn",job:"Manager"},{id:3433,name:"\u0110\u1ed7 Th\u1ecb Giang",email:"giang.do@ntq-solution.com.vn",job:"Tester"},{id:5354,name:"\u0110\u1ed7 Th\u1ecb H\u1ea1nh",email:"hanh.do@ntq-solution.com.vn",job:"Intern"},{id:3455,name:"\u0110\u1ed7 Th\u1ecb L\u1ec7",email:"le.do1@ntq-solution.com.vn",job:"Tester"},{id:4928,name:"\u0110\u1ed7 Th\u1ecb Ng\u1ecdc H\xe2n",email:"han.do1@ntq-solution.com.vn",job:"Training staff"},{id:2819,name:"\u0110\u1ed7 Th\u1ecb T\xe2m",email:"tam.do@ntq-solution.com.vn",job:"Tester"},{id:3962,name:"\u0110\u1ed7 Th\u1ecb Thu Loan",email:"loan.do@ntq-solution.com.vn",job:"BPO"},{id:5269,name:"\u0110\u1ed7 Th\u1ecb Thu Th\u1ea3o",email:"thao.do2@ntq-solution.com.vn",job:"Developer"},{id:4461,name:"\u0110\u1ed7 Thu H\u01b0\u1eddng",email:"huong.do1@ntq-solution.com.vn",job:"BA"},{id:4993,name:"\u0110\u1ed7 Th\xfay Qu\u1ef3nh",email:"quynh.do2@ntq-solution.com.vn",job:"Developer"},{id:1261,name:"\u0110\u1ed7 Th\xf9y Trang",email:"trang.do@ntq-solution.com.vn",job:"HR staff"},{id:1262,name:"\u0110\u1ed7 Trang V\u01b0\u01a1ng",email:"vuong.do@ntq-solution.com.vn",job:"SE"},{id:4091,name:"\u0110\u1ed7 V\u0103n H\u1ea3i",email:"hai.do1@ntq-solution.com.vn",job:"Developer"},{id:4240,name:"\u0110\u1ed7 V\u0103n H\xf9ng",email:"hung.do1@ntq-solution.com.vn",job:"Developer"},{id:5001,name:"\u0110\u1ed7 V\u0103n Ti\u1ec7p",email:"tiep.do@ntq-solution.com.vn",job:"Developer"},{id:5570,name:"\u0110\u1ed7 Vi\u1ec7t Anh 2",email:"anh.do6@ntq-solution.com.vn",job:"Intern"},{id:5230,name:"\u0110\u1ed7 V\u0169 Tu\u1ea5n",email:"tuan.do1@ntq-solution.com.vn",job:"Developer"},{id:1265,name:"\u0110\u1ed7 Xu\xe2n H\u01b0ng",email:"hung.do@ntq-solution.com.vn",job:"Developer"},{id:4344,name:"D\u01b0\u01a1ng \u0110\xecnh M\u1ea1nh",email:"manh.duong@ntq-solution.com.vn",job:"Developer"},{id:4324,name:"D\u01b0\u01a1ng H\u1ed3ng \u0110\u1ee9c",email:"duc.duong1@ntq-solution.com.vn",job:"Team Leader"},{id:5541,name:"D\u01b0\u01a1ng L\u1ea1c Hoa",email:"hoa.duong@reco-vn.com",job:"Intern"},{id:4330,name:"D\u01b0\u01a1ng Linh H\u01b0\u01a1ng",email:"huong.duong@reco-vn.com",job:"BA"},{id:2700,name:"D\u01b0\u01a1ng M\u1ea1nh C\u01b0\u1eddng",email:"cuong.duong@ntq-solution.com.vn",job:"Developer"},{id:5764,name:"D\u01b0\u01a1ng Ng\u1ecdc Quang",email:"quang.duong@ntq-solution.com.vn",job:"Developer"},{id:5328,name:"D\u01b0\u01a1ng Nguy\u1ec5n Thi\xean Ph\xfac",email:"phuc.duong1@ntq-solution.com.vn",job:"QA"},{id:5444,name:"D\u01b0\u01a1ng Ph\xfac Th\u1eafng",email:"thang.duong@ntq-solution.com.vn",job:"Developer"},{id:5254,name:"D\u01b0\u01a1ng Quang Vinh",email:"vinh.duong@ntq-solution.com.vn",job:"Intern"},{id:5283,name:"D\u01b0\u01a1ng T\u1ea5n Ph\u01b0\u1edbc",email:"phuoc.duong@ntq-solution.com.vn",job:"Developer"},{id:4540,name:"D\u01b0\u01a1ng Th\u1ecb H\u1ea3i",email:"hai.duong@ntq-solution.com.vn",job:"Tester"},{id:4171,name:"D\u01b0\u01a1ng Th\u1ecb Th\xf9y Linh",email:"linh.duong1@ntq-solution.com.vn",job:"Sales"},{id:5786,name:"D\u01b0\u01a1ng Th\u1ecb Trang",email:!1,job:"Developer"},{id:1267,name:"D\u01b0\u01a1ng Thu Huy\u1ec1n",email:"huyen.duong@ntq-solution.com.vn",job:"PMO"},{id:5166,name:"D\u01b0\u01a1ng Th\xfay H\u1ea1nh",email:"hanh.duong@ntq-solution.com.vn",job:"Designer"},{id:5777,name:"D\u01b0\u01a1ng Th\xf9y Linh 1",email:"linh.duong3@ntq-solution.com.vn",job:"Account Manager"},{id:4477,name:"D\u01b0\u01a1ng Ti\u1ebfn Nam",email:"nam.duong@ntq-solution.com.vn",job:"Developer"},{id:2435,name:"D\u01b0\u01a1ng V\u0103n S\u01a1n",email:"son.duong@ntq-solution.com.vn",job:"Developer"},{id:4025,name:"D\u01b0\u01a1ng V\u0103n Thu\u1eadn",email:"thuan.duong2@ntq-solution.com.vn",job:"Developer"},{id:5215,name:"D\u01b0\u01a1ng Xu\xe2n Huy",email:"huy.duong1@reco-vn.com",job:"HR staff"},{id:3738,name:"Edatsune Isao",email:"isao.edatsune@ntq-solution.com.vn",job:"Sales"},{id:5785,name:"Edward Li",email:"edward.li@ntq-solution.com.vn",job:"Solution architect"},{id:4771,name:"Gi\xe1p Thanh T\xf9ng",email:"tung.giap@ntq-solution.com.vn",job:"Developer"},{id:4469,name:"H\xe1n Th\u1ecb Di\u1ec7u Linh",email:"linh.han@ntq-solution.com.vn",job:"Tester"},{id:5454,name:"H\xe0 Ph\u01b0\u01a1ng Th\u1ea3o",email:"thaohp@2-b.io",job:"Sales"},{id:4743,name:"H\xe0 Th\u1ecb Hu\u1ec7",email:"hue.ha@ntq-solution.com.vn",job:"Tester"},{id:3591,name:"H\xe0 Th\u1ecb Ngoan",email:"ngoan.ha@ntq-solution.com.vn",job:"Comtor"},{id:3704,name:"H\xe0 V\u0103n Quang",email:"quang.ha@ntq-solution.com.vn",job:"Developer"},{id:5872,name:"H\xe0 Vi\u1ec7t D\u0169ng",email:"dung.ha@ntq-solution.com.vn",job:"Intern"},{id:3023,name:"H\xe0 Xu\xe2n T\xe0i",email:"tai.ha@ntq-solution.com.vn",job:"Developer"},{id:5039,name:"Hayashi Shigeru",email:"shigeru.hayashi@ntq-solution.com.vn",job:"Sales"},{id:4641,name:"Hin Yuen ",email:"yuen.hin@ntq-solution.com.vn",job:"Technical Leader"},{id:5710,name:"Ho\xe0ng B\xedch Ng\u1ecdc",email:"ngoc.hoang@reco-vn.com",job:"Intern"},{id:4805,name:"Ho\xe0ng C\xf4ng Huy",email:"huy.hoang@ntq-solution.com.vn",job:"Developer"},{id:4547,name:"Ho\xe0ng \u0110\u1ee9c Anh",email:"anh.hoang1@ntq-solution.com.vn",job:"Developer"},{id:5743,name:"Ho\xe0ng \u0110\u1ee9c Tu\u1ea5n",email:"tuan.hoang3@ntq-solution.com.vn",job:"Developer"},{id:5866,name:"Ho\xe0ng H\u1ea3i",email:"hai.hoang2@ntq-solution.com.vn",job:"Intern"},{id:3922,name:"Ho\xe0ng Huy Trung",email:"trung.hoang@ntq-solution.com.vn",job:"Developer"},{id:3439,name:"Ho\xe0ng Kh\xe1nh Linh",email:"linh.hoang@ntq-solution.com.vn",job:"Comtor"},{id:2592,name:"Ho\xe0ng L\xea Ho\xe0i Th\u01b0\u01a1ng",email:"thuong.hoang@ntq-solution.com.vn",job:"BA"},{id:4938,name:"Ho\xe0ng Linh Chi",email:"chi.hoang@reco-vn.com",job:"Recruiter Executive"},{id:3992,name:"Ho\xe0ng M\u1ea1nh Ti\u1ebfn",email:"tien.hoang@ntq-solution.com.vn",job:"Developer"},{id:5089,name:"Ho\xe0ng Minh Anh",email:"anh.hoang2@ntq-solution.com.vn",job:"BA"},{id:5421,name:"Ho\xe0ng Minh Chi\u1ebfn 1",email:"chien.hoang1@ntq-solution.com.vn",job:"PMO"},{id:4701,name:"Ho\xe0ng Ng\u1ecdc \u0110\u1ecbnh",email:"dinh.hoang@ntq-solution.com.vn",job:"Developer"},{id:5875,name:"Ho\xe0ng Ng\u1ecdc H\xe0",email:"ha.hoang1@ntq-solution.com.vn",job:"Intern"},{id:5555,name:"Ho\xe0ng Ng\u1ecdc T\xf9ng",email:"tung.hoang1@ntq-solution.com.vn",job:"Developer"},{id:5363,name:"Ho\xe0ng Nh\u1eadt Chi",email:"chi.hoang1@ntq-solution.com.vn",job:"BA"},{id:4756,name:"Ho\xe0ng Quang V\u0169",email:"vu.hoang@ntq-solution.com.vn",job:"PM"},{id:5300,name:"Ho\xe0ng Qu\u1ef3nh Anh",email:"anh.hoang3@ntq-solution.com.vn",job:"Account Manager"},{id:5645,name:"Ho\xe0ng Th\u1ecb H\u1ea3i Y\u1ebfn",email:"yen.hoang1@ntq-solution.com.vn",job:"BA"},{id:4320,name:"Ho\xe0ng Th\u1ecb Huy\u1ec1n",email:"huyen.hoang1@ntq-solution.com.vn",job:"Tester"},{id:3760,name:"Ho\xe0ng Th\u1ecb M\u1ef9 Huy\u1ec1n",email:"huyen.hoang@ntq-solution.com.vn",job:"Tester"},{id:5561,name:"Ho\xe0ng Th\u1ecb Ng\u1ecdc H\xe0",email:"ha.hoang@ntq-solution.com.vn",job:"Intern"},{id:5217,name:"Ho\xe0ng Ti\u1ebfn \u0110\u1ea1t",email:"dat.hoang1@ntq-solution.com.vn",job:"PR"},{id:3491,name:"Ho\xe0ng Tr\u1ecdng Hi\u1ec7p",email:"hiep.hoang@ntq-solution.com.vn",job:"Developer"},{id:5115,name:"Ho\xe0ng V\u0103n Trung",email:"trung.hoang2@ntq-solution.com.vn",job:"Developer"},{id:2636,name:"Ho\xe0ng V\u0103n T\xf9ng 1",email:"tung.hoang.van1@ntq-solution.com.vn",job:"Developer"},{id:5535,name:"Ho\xe0ng V\u0103n Tuy\u1ec3n",email:"tuyen.hoang1@ntq-solution.com.vn",job:"Developer"},{id:5835,name:"Ho\xe0ng V\u0103n Vang",email:"vang.hoang@ntq-solution.com.vn",job:"Developer"},{id:3042,name:"Ho\xe0ng Xu\xe2n B\xecnh",email:"binh.hoang1@ntq-solution.com.vn",job:"Developer"},{id:1698,name:"Ho\xe0ng Xu\xe2n Nguy\xean",email:"nguyen.hoang@ntq-solution.com.vn",job:"Team Leader"},{id:4904,name:"H\u1ed3 An Huy",email:"huy.ho@ntq-solution.com.vn",job:"Intern"},{id:5355,name:"H\u1ed3 Nh\u1ecb H\xe0",email:"ha.ho@ntq-solution.com.vn",job:"Tester"},{id:5486,name:"Honzaki Yuko",email:"yuko.honzaki@ntq-solution.com.vn",job:"Developer"}]}))};m.a.createRoot(document.getElementById("root")).render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(h,null)))},7:function(n,e,o){n.exports=o(18)}},[[7,2,1]]]);
//# sourceMappingURL=main.a6807e48.chunk.js.map