var gvjs_LV="border: 0; padding: 0; margin: 0;";function gvjs_MV(a,b,c,d,e){gvjs_rn.call(this);this.da=a;this.fa=b;this.Ma=c;this.ML=new gvjs_$h({nb:gvjs_du,fontSize:d,color:gvjs_9r,opacity:1,Ub:"",bold:!1,ud:!1,Bf:!1});this.BAa=new gvjs_$h({nb:gvjs_du,fontSize:d,color:gvjs_6a,opacity:1,Ub:"",bold:!1,ud:!1,Bf:!1});this.Bza=new gvjs_$h({nb:gvjs_du,fontSize:0,color:gvjs_9r,opacity:1,Ub:"",bold:!1,ud:!1,Bf:!1});this.Qwa=e;this.Qg=this.Xa=this.C=null;this.O1=[]}gvjs_p(gvjs_MV,gvjs_rn);
var gvjs_NV=new gvjs_B({fill:gvjs_ls,stroke:gvjs_9r,strokeWidth:1}),gvjs_OV=new gvjs_B({fill:"#f7f7f7",stroke:gvjs_ms,strokeWidth:2}),gvjs_Kja=new gvjs_B({stroke:gvjs_bs,strokeWidth:1}),gvjs_Lja=new gvjs_B({stroke:gvjs_9r,strokeWidth:2}),gvjs_Mja=new gvjs_B({fill:"#dc3912",fillOpacity:.7,stroke:"#c63310",strokeWidth:1}),gvjs_Nja=new gvjs_B({fill:"#4684ee",stroke:gvjs_bs,strokeWidth:1});gvjs_=gvjs_MV.prototype;gvjs_.cb=NaN;gvjs_.Jb=NaN;gvjs_.uca=NaN;gvjs_.UD=NaN;gvjs_.ne=0;gvjs_.oY=null;gvjs_.NL=null;
gvjs_.y4=null;gvjs_.Q6=270;gvjs_.rda=0;gvjs_.qda=null;gvjs_.XJ=null;gvjs_.Lz=null;gvjs_.sg=null;gvjs_.Qf=function(){return this.cb};gvjs_.Rw=function(a){this.cb=a};gvjs_.Pf=function(){return this.Jb};gvjs_.qu=function(a){this.Jb=a};
gvjs_.ab=function(a,b,c){this.ne=a;this.oY=b;this.xu();a=gvjs_PV(this,a);null!=this.XJ&&c?(this.sg=new gvjs_9D([this.XJ],[a],c.duration,c.easing),gvjs_Q(this.sg,["begin","animate",gvjs_0],this.Ava,!1,this),gvjs_Q(this.sg,gvjs_0,this.zva,!1,this),this.sg.play(!1)):(this.XJ=a,gvjs_QV(this))};gvjs_.rT=function(a,b){this.uca=Math.max(1,a);this.UD=Math.max(1,b)};gvjs_.a3=function(a){this.Lz=a};function gvjs_RV(a,b,c,d){a.O1.push({Mf:b,Rl:c,color:d})}gvjs_.setAnimation=function(){};
gvjs_.clear=function(){this.xu();gvjs_P(this.Xa);this.Xa=null;gvjs_nn(this)};gvjs_.draw=function(a,b){var c=new gvjs_w(this.fa,this.Ma);null!=this.Xa?this.Xa.update(c,a):this.Xa=new gvjs_QA(this.da,c,a,b);this.Xa.aq(gvjs_o(this.Oo,this),a)};
gvjs_.Oo=function(){var a=this.Xa.gb(),b=a.tn(this.fa,this.Ma);a.Dc(b,gvjs_Wj,gvjs_1m);this.C=a;var c=this.Qg=a.Wa(!1);a.appendChild(b,c);b=Math.round(.45*Math.min(this.fa,this.Ma));var d=this.fa/2,e=this.Ma/2;a.ef(d-.5,e-.5,b,gvjs_NV,c);b-=gvjs_NV.bc;b=Math.round(.9*b);a.ef(d-.5,e-.5,b,gvjs_OV,c);b-=2*gvjs_OV.bc;var f=.75*b;for(var g=0;g<this.O1.length;g++){var h=this.O1[g],k=gvjs_SV(this,gvjs_PV(this,h.Mf)),l=gvjs_SV(this,gvjs_PV(this,h.Rl)),m=new gvjs_oA,n=d+gvjs_fd(k,b),p=e+gvjs_gd(k,b);m.move(n,
p);m.rg(d,e,b,b,k+90,l+90,!0);n=d+gvjs_fd(l,f);p=e+gvjs_gd(l,f);m.Aa(n,p);m.rg(d,e,f,f,l+90,k+90,!1);m.close();a.Oa(m,new gvjs_B({fill:h.color}),c)}if(this.NL||this.y4)this.NL&&(f=e-Math.round(.35*b),a.rj(this.NL,0,f,this.fa,f,gvjs__,gvjs__,this.ML,c)),this.y4&&(f=e+Math.round(.35*b),a.rj(this.y4,0,f,this.fa,f,gvjs__,gvjs__,this.ML,c));h=this.UD;k=.8*b;l=.9*b;n=this.uca*h;p=(this.Jb-this.cb)/n;var q=new gvjs_oA,r=new gvjs_oA,t=this.Bza,u=Math.round(.14*b);t.fontSize=u;for(g=0;g<=n;g++){var v=gvjs_SV(this,
gvjs_PV(this,g*p+this.cb)),w=0==g%h,y=w?k:l;m=w?q:r;var x=d+gvjs_fd(v,y);f=e+gvjs_gd(v,y);m.move(x,f);x=d+gvjs_fd(v,b);f=e+gvjs_gd(v,b);m.Aa(x,f);w&&this.Lz&&(m=this.Lz[Math.floor(g/h)])&&(x=d+gvjs_fd(v,y-u/2),f=e+gvjs_gd(v,y-u/2),y=gvjs__,280<v||90>v?(y=gvjs_0,v=0):90<=v&&260>v?(y=gvjs_2,v=x,x=this.fa):(w=Math.min(x,this.fa-x),v=x-w,x+=w,f+=Math.round(u/4)),a.rj(m,v,f,x,f,y,gvjs__,t,c))}a.Oa(r,gvjs_Kja,c);a.Oa(q,gvjs_Lja,c);this.xu();this.rda=b;gvjs_QV(this);this.Qwa()};
gvjs_.Ava=function(a){this.XJ=a.x;gvjs_QV(this)};gvjs_.zva=function(){this.xu()};gvjs_.xu=function(){this.sg&&(gvjs_nn(this.sg),this.sg.stop(!1),gvjs_P(this.sg),this.sg=null)};function gvjs_PV(a,b){a=(b-a.cb)/(a.Jb-a.cb);a=Math.max(a,-.02);return a=Math.min(a,1.02)}function gvjs_SV(a,b){return a.Q6*b+gvjs_cd((360-a.Q6)/2+90)}
function gvjs_QV(a){if(a.C){var b=a.rda,c=a.C,d=a.fa/2,e=a.Ma/2,f=gvjs_SV(a,a.XJ),g=Math.round(.95*b),h=Math.round(.3*b),k=gvjs_fd(f,g);g=gvjs_gd(f,g);var l=gvjs_fd(f,h);h=gvjs_gd(f,h);f=gvjs_cd(f+90);var m=.07*b,n=gvjs_fd(f,m);m=gvjs_gd(f,m);f=new gvjs_oA;f.move(d+k,e+g);f.fq(d+n,e+m,d-l+n/2,e-h+m/2,d-l,e-h);f.fq(d-l-n/2,e-h-m/2,d-n,e-m,d+k,e+g);k=Math.round(.15*b);(g=a.qda)?c.vc(g):g=a.qda=c.Wa();a.oY&&(b=e+Math.round(.75*b),c.rj(a.oY,0,b,a.fa,b,gvjs__,gvjs__,a.BAa,g));c.Oa(f,gvjs_Mja,g);c.ef(d-
.5,e-.5,k,gvjs_Nja,g);c.appendChild(a.Qg,g)}};function gvjs_TV(a,b,c,d){this.da=a;this.fa=b;this.Ma=c;this.PO=d;this.Sy=[];this.Gc=[];this.Lz=[];this.pY=[];this.fr=[];this.cb=0;this.Jb=100;this.R6=this.U1=this.pS=this.oS=this.A5=this.LU=this.KU=this.gZ=this.yP=this.xP=null;this.Qr=!0;this.T0=0}gvjs_=gvjs_TV.prototype;gvjs_.UD=2;gvjs_.Rw=function(a){this.cb!=a&&(this.cb=a,this.Qr=!0)};gvjs_.Qf=function(){return this.cb};gvjs_.qu=function(a){this.Jb!=a&&(this.Jb=a,this.Qr=!0)};gvjs_.Pf=function(){return this.Jb};
gvjs_.setAnimation=function(a){this.R6=a};gvjs_.setValues=function(a,b,c){this.Qr=this.Qr||this.Gc.length!=a.length||this.fr.length!=c.length||!gvjs_4c(this.fr,c);this.Gc=a;this.pY=b;this.fr=c};gvjs_.a3=function(a){1==a.length&&(a=["",a[0],""]);gvjs_4c(this.Lz,a)||(this.Lz=a,this.Qr=!0)};function gvjs_UV(a,b,c){return Math.min(Math.floor(a.fa/c),Math.floor(a.Ma/b))}
gvjs_.draw=function(a){if(this.Qr)gvjs_Oja(this,a);else for(a=0;a<this.Gc.length;a++){var b=this.Sy[a];b.NL=this.fr[a];b.ab(this.Gc[a],this.pY[a],this.R6)}};
function gvjs_Oja(a,b){a.clear();var c=a.Gc.length,d=1,e=1;if(1<c){var f=Math.floor(Math.sqrt(a.fa*a.Ma/c));e=Math.floor(a.fa/f);for(d=Math.floor(a.Ma/f);!(c<=Math.floor(a.fa/f)*Math.floor(a.Ma/f));){var g=gvjs_UV(a,d,e+1),h=gvjs_UV(a,d+1,e);g>=h&&(f=g,e++);h>=g&&(f=h,d++)}}f=gvjs_UV(a,d,e);f-=0;h=gvjs_6o();h.vc(a.da);a.Sy=[];if(0!=c){var k=h.G(gvjs_Qa,{style:gvjs_LV,cellpadding:0,cellspacing:0,align:gvjs__}),l=h.G(gvjs_Ra,null);h.appendChild(k,l);g=[];for(var m=0,n=0;n<d;n++){var p=h.G(gvjs_Ua,{style:gvjs_LV});
h.appendChild(l,p);for(var q=0;q<e;q++){var r=h.G(gvjs_Sa,{style:"border: 0; padding: 0; margin: 0; width: "+f+"px;"});g[m++]=r;h.appendChild(p,r)}}h.appendChild(a.da,k);d=Math.round(.1*f);a.T0=0;a.Qr=!0;for(e=0;e<c;e++)h=a.Sy[e]=new gvjs_MV(g[e],f,f,d,gvjs_o(function(){this.T0++;this.T0==this.Sy.length&&(this.Qr=!1)},a)),h.Rw(a.cb),h.qu(a.Jb),h.NL=a.fr[e],k=a.Lz,l=k.length,h.rT(1<l?l-1:4,a.UD),0<l&&h.a3(k),h.ab(a.Gc[e],a.pY[e],null),null!=a.xP&&null!=a.yP&&gvjs_RV(h,a.xP,a.yP,a.gZ),null!=a.KU&&null!=
a.LU&&gvjs_RV(h,a.KU,a.LU,a.A5),null!=a.oS&&null!=a.pS&&gvjs_RV(h,a.oS,a.pS,a.U1),h.draw(b,a.PO)}}gvjs_.clear=function(){for(var a=0;a<this.Sy.length;++a)this.Sy[a].clear();this.Sy=[]};function gvjs_VV(a){gvjs_Sq.call(this,a);this.H=gvjs_6o()}gvjs_p(gvjs_VV,gvjs_Sq);gvjs_=gvjs_VV.prototype;gvjs_.fa=0;gvjs_.Ma=0;gvjs_.PO=!0;
gvjs_.Pg=function(a,b,c){var d=new gvjs_mi([c||{}]);c=this.container;var e=gvjs__o(c,d),f=gvjs_0o(c,d),g=gvjs_D(d,gvjs__v);if(e!=this.fa||f!=this.Ma||g!=this.PO)this.sL&&this.sL.clear(),this.sL=new gvjs_TV(c,e,f,g),this.fa=e,this.Ma=f,this.PO=g;c=this.sL;e=gvjs_E(d,gvjs_nx,0);c.Rw(e);e=gvjs_E(d,gvjs_ex,100);c.qu(e);e=d.ga("majorTicks",[String(c.Qf()),"","","",String(c.Pf())]);c.a3(e);e=gvjs_E(d,"minorTicks",2);c.UD!=e&&(c.UD=e,c.Qr=!0);e=d.Ga("greenFrom");f=d.Ga("greenTo");g=d.Ga("yellowFrom");var h=
d.Ga("yellowTo"),k=d.Ga("redFrom"),l=d.Ga("redTo"),m=gvjs_Mi(d,"greenColor",gvjs_7r),n=gvjs_Mi(d,"yellowColor",gvjs_is),p=gvjs_Mi(d,"redColor",gvjs_hs);if(c.xP!=e||c.yP!=f||c.gZ!=m||c.KU!=g||c.LU!=h||c.A5!=n||c.oS!=k||c.pS!=l||c.U1!=p)c.xP=e,c.yP=f,c.gZ=m,c.KU=g,c.LU=h,c.A5=n,c.oS=k,c.pS=l,c.U1=p,c.Qr=!0;d=gvjs_GL(d,400,gvjs_Iw);c.setAnimation(d);d=[];e=[];f=[];if(2==b.Z()&&b.Y(0)==gvjs_f&&b.Y(1)==gvjs_e)for(g=0;g<b.ea();g++)null!=b.getValue(g,0)&&null!=b.getValue(g,1)&&(f.push(b.getValue(g,0)),d.push(b.getValue(g,
1)),e.push(b.Ta(g,1)));else for(h=0;h<b.Z();h++)if(b.Y(h)==gvjs_e)for(g=0;g<b.ea();g++)null!=b.getValue(g,h)&&(d.push(b.getValue(g,h)),e.push(b.Ta(g,h)),f.push(b.Ua(h)));c.setValues(d,e,f);c.draw(a);gvjs_T(this,gvjs_I,null)};gvjs_.Ef=function(){this.sL&&this.sL.clear()};gvjs_k(gvjs_Fk,gvjs_VV,void 0);gvjs_VV.prototype.draw=gvjs_VV.prototype.draw;gvjs_VV.prototype.clearChart=gvjs_VV.prototype.Wb;gvjs_VV.prototype.getContainer=gvjs_VV.prototype.getContainer;