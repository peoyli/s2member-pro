jQuery(document).ready(function(c){var a=function(){if(window.StripeCheckout){clearInterval(d),b()}},d=setInterval(a,100);c.ajax({cache:true,dataType:"script",url:"https://checkout.stripe.com/checkout.js"});var b=function(){var C,k,v,p,r,u,B={"aria-required":"true"},h={"aria-required":"false"},o={"aria-required":"false",disabled:"disabled"},D={disabled:"disabled"},w=true,I,s,l,E,i,J,e,g,F,G,M,K,N,A,z,y,f,m,x,H,L,t,j,q;C=new Image(),C.src='<?php echo $vars["i"]; ?>/ajax-loader.gif';if(c("form.s2member-pro-stripe-cancellation-form").length>1||c("form.s2member-pro-stripe-registration-form").length>1||c("form.s2member-pro-stripe-update-form").length>1||c("form.s2member-pro-stripe-sp-checkout-form").length>1||c("form.s2member-pro-stripe-checkout-form").length>1){return alert("Detected more than one s2Member Pro Form.\n\nPlease use only ONE s2Member Pro Form Shortcode on each Post/Page. Attempting to serve more than one Pro Form on each Post/Page (even w/ DHTML) may result in unexpected/broken functionality.")}if((k=c("form#s2member-pro-stripe-cancellation-form")).length===1){L="div#s2member-pro-stripe-cancellation-form-captcha-section",t="div#s2member-pro-stripe-cancellation-form-submission-section",j=t+" button#s2member-pro-stripe-cancellation-submit";c(j).removeAttr("disabled"),ws_plugin__s2member_animateProcessing(c(j),"reset");k.on("submit",function(){var R=this,P="",O="",S="",Q=c(L+" input#recaptcha_response_field");c(":input",R).each(function(){var T=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(T&&(P=c.trim(c('label[for="'+T+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){S+=O+"\n\n"}}});if((S=c.trim(S))){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+S);return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}c(j).attr(D),ws_plugin__s2member_animateProcessing(c(j));return true})}else{if((p=c("form#s2member-pro-stripe-registration-form")).length===1){K="div#s2member-pro-stripe-registration-form-registration-section",L="div#s2member-pro-stripe-registration-form-captcha-section",t="div#s2member-pro-stripe-registration-form-submission-section",j=t+" button#s2member-pro-stripe-registration-submit";c(j).removeAttr("disabled"),ws_plugin__s2member_animateProcessing(c(j),"reset");if(c(t+" input#s2member-pro-stripe-registration-names-not-required-or-not-possible").length){c(K+" > div#s2member-pro-stripe-registration-form-first-name-div").hide(),c(K+" > div#s2member-pro-stripe-registration-form-first-name-div :input").attr(o);c(K+" > div#s2member-pro-stripe-registration-form-last-name-div").hide(),c(K+" > div#s2member-pro-stripe-registration-form-last-name-div :input").attr(o)}if(c(t+" input#s2member-pro-stripe-registration-password-not-required-or-not-possible").length){c(K+" > div#s2member-pro-stripe-registration-form-password-div").hide(),c(K+" > div#s2member-pro-stripe-registration-form-password-div :input").attr(o)}c(K+" > div#s2member-pro-stripe-registration-form-password-div :input").on("keyup",function(){ws_plugin__s2member_passwordStrength(c(K+" input#s2member-pro-stripe-registration-username"),c(K+" input#s2member-pro-stripe-registration-password1"),c(K+" input#s2member-pro-stripe-registration-password2"),c(K+" div#s2member-pro-stripe-registration-form-password-strength"))});p.on("submit",function(){var R=this,P="",O="",U="",Q=c(L+" input#recaptcha_response_field"),T=c(K+' input#s2member-pro-stripe-registration-password1[aria-required="true"]'),S=c(K+" input#s2member-pro-stripe-registration-password2");c(":input",R).each(function(){var V=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(V&&(P=c.trim(c('label[for="'+V+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){U+=O+"\n\n"}}});if((U=c.trim(U))){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+U);return false}else{if(T.length&&c.trim(T.val())!==c.trim(S.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(T.length&&c.trim(T.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}c(j).attr(D),ws_plugin__s2member_animateProcessing(c(j));return true})}else{if((v=c("form#s2member-pro-stripe-update-form")).length===1){A="div#s2member-pro-stripe-update-form-billing-method-section",y=A+" button#s2member-pro-stripe-update-form-card-token-button",f=A+" div#s2member-pro-stripe-update-form-card-token-summary",H="div#s2member-pro-stripe-update-form-billing-address-section",L="div#s2member-pro-stripe-update-form-captcha-section",t="div#s2member-pro-stripe-update-form-submission-section",m=t+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_update[card_token]")+'"]',x=t+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_update[card_token_summary]")+'"]',j=t+" button#s2member-pro-stripe-update-submit";c(j).removeAttr("disabled"),ws_plugin__s2member_animateProcessing(c(j),"reset");z=function(O){var P=c(m).val();if(P){c(A).show(),c(A+" > div.s2member-pro-stripe-update-form-div").show(),c(A+" > div.s2member-pro-stripe-update-form-div :input").attr(B);if(w){c(H).show(),c(H+" > div.s2member-pro-stripe-update-form-div").show(),c(H+" > div.s2member-pro-stripe-update-form-div :input").attr(B)}else{c(H).hide(),c(H+" > div.s2member-pro-stripe-update-form-div").hide(),c(H+" > div.s2member-pro-stripe-update-form-div :input").attr(h)}if(O){c(t+" button#s2member-pro-stripe-update-submit").focus()}}else{if(!P){c(A).show(),c(A+" > div.s2member-pro-stripe-update-form-div").show(),c(A+" > div.s2member-pro-stripe-update-form-div :input").attr(B);c(H).hide(),c(H+" > div.s2member-pro-stripe-update-form-div").hide(),c(H+" > div.s2member-pro-stripe-update-form-div :input").attr(h)}}};z();c(y).on("click",function(){var O=StripeCheckout.configure({key:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_publishable_key"]); ?>',zipCode:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_validate_zipcode"]); ?>'=="1",image:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_image"]); ?>',panelLabel:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Add", "s2member-front", "s2member")); ?>',email:c(K+" input#s2member-pro-stripe-update-email").val(),allowRememberMe:true,token:function(P){c(m).val(P.id),c(x).val(n(P)),c(f).html(ws_plugin__s2member_escHtml(n(P))),z()}});O.open()});v.on("submit",function(){var R=this,P="",O="",S="",Q=c(L+" input#recaptcha_response_field");if(!c(m).val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("No Billing Method; please try again.", "s2member-front", "s2member")); ?>');return false}c(":input",R).each(function(){var T=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(T&&(P=c.trim(c('label[for="'+T.replace(/-(month|year)/,"")+'"]',R).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(O=ws_plugin__s2member_validationErrors(P,this,R)){S+=O+"\n\n"}}});if((S=c.trim(S))){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+S);return false}else{if(Q.length&&!Q.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}c(j).attr(D),ws_plugin__s2member_animateProcessing(c(j));return true})}else{if((u=c("form#s2member-pro-stripe-sp-checkout-form")).length===1||(u=c("form#s2member-pro-stripe-checkout-form")).length===1){(function(P){var Q=P[0].id.replace(/^s2member\-pro\-stripe\-/,"").replace(/\-form$/,""),O=Q.replace(/[^a-z0-9]/gi,"_");e="div#s2member-pro-stripe-"+Q+"-form-options-section",g=e+" select#s2member-pro-stripe-"+Q+"-options",F="div#s2member-pro-stripe-"+Q+"-form-description-section",G="div#s2member-pro-stripe-"+Q+"-form-coupon-section",M=G+" input#s2member-pro-stripe-"+Q+"-coupon-apply",K="div#s2member-pro-stripe-"+Q+"-form-registration-section",N="div#s2member-pro-stripe-"+Q+"-form-custom-fields-section",A="div#s2member-pro-stripe-"+Q+"-form-billing-method-section",y=A+" button#s2member-pro-stripe-"+Q+"-form-card-token-button",f=A+" div#s2member-pro-stripe-"+Q+"-form-card-token-summary",H="div#s2member-pro-stripe-"+Q+"-form-billing-address-section",J=H+" > div#s2member-pro-stripe-"+Q+"-form-ajax-tax-div",L="div#s2member-pro-stripe-"+Q+"-form-captcha-section",t="div#s2member-pro-stripe-"+Q+"-form-submission-section",m=t+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_"+O+"[card_token]")+'"]',x=t+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_"+O+"[card_token_summary]")+'"]',q=t+" input#s2member-pro-stripe-"+Q+"-nonce",j=t+" button#s2member-pro-stripe-"+Q+"-submit";c(g).removeAttr("disabled"),c(M).removeAttr("disabled"),c(j).removeAttr("disabled"),ws_plugin__s2member_animateProcessing(c(j),"reset");if(!c(g+" option").length){c(e).hide(),c(F).show()}else{c(e).show(),c(F).hide(),c(g).on("change",function(){c(q).val("option"),P.attr("action",P.attr("action").replace(/#.*$/,"")+"#s2p-form"),P.submit()})}if(c(t+" input#s2member-pro-stripe-"+Q+"-coupons-not-required-or-not-possible").length){c(G).hide()}else{c(G).show(),c(M).on("click",function(){c(q).val("apply-coupon"),P.submit()})}if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){c(K+" input#s2member-pro-stripe-"+Q+"-first-name").each(function(){var R=c(this),S=R.val();if(!S){R.val(S2MEMBER_CURRENT_USER_FIRST_NAME)}});c(K+" input#s2member-pro-stripe-"+Q+"-last-name").each(function(){var R=c(this),S=R.val();if(!S){R.val(S2MEMBER_CURRENT_USER_LAST_NAME)}});c(K+" input#s2member-pro-stripe-"+Q+"-email").val(S2MEMBER_CURRENT_USER_EMAIL).attr(o),c(K+" input#s2member-pro-stripe-"+Q+"-username").val(S2MEMBER_CURRENT_USER_LOGIN).attr(o);c(K+" > div#s2member-pro-stripe-"+Q+"-form-password-div").hide(),c(K+" > div#s2member-pro-stripe-"+Q+"-form-password-div :input").attr(o);if(c.trim(c(K+" > div#s2member-pro-stripe-"+Q+"-form-registration-section-title").html())==='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Create Profile", "s2member-front", "s2member")); ?>'){c(K+" > div#s2member-pro-stripe-"+Q+"-form-registration-section-title").html('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Your Profile", "s2member-front", "s2member")); ?>')}c(N).hide(),c(N+" :input").attr(o)}if(c(t+" input#s2member-pro-stripe-"+Q+"-password-not-required-or-not-possible").length){c(K+" > div#s2member-pro-stripe-"+Q+"-form-password-div").hide(),c(K+" > div#s2member-pro-stripe-"+Q+"-form-password-div :input").attr(o)}else{c(K+" > div#s2member-pro-stripe-"+Q+"-form-password-div :input").on("keyup",function(){ws_plugin__s2member_passwordStrength(c(K+" input#s2member-pro-stripe-"+Q+"-username"),c(K+" input#s2member-pro-stripe-"+Q+"-password1"),c(K+" input#s2member-pro-stripe-"+Q+"-password2"),c(K+" div#s2member-pro-stripe-"+Q+"-form-password-strength"))})}if(c(t+" input#s2member-pro-stripe-"+Q+"-tax-not-required-or-not-possible").length){c(J).hide(),w=false}else{s=function(R){setTimeout(function(){I(R)},10)};I=function(V){if(!w){return}if(V&&V.interval&&document.activeElement&&document.activeElement.id==="s2member-pro-stripe-"+Q+"-country"){return}var W=c(t+" input#s2member-pro-stripe-"+Q+"-attr").val(),R=c.trim(c(H+" input#s2member-pro-stripe-"+Q+"-state").val()),T=c.trim(c(H+" select#s2member-pro-stripe-"+Q+"-country").val()),S=c.trim(c(H+" input#s2member-pro-stripe-"+Q+"-zip").val()),U=R+"|"+T+"|"+S;if(R&&T&&S&&U&&(!i||i!==U)){clearTimeout(l),l=0,i=U;if(E){E.abort()}var X='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(c_ws_plugin__s2member_utils_encryption::encrypt("ws-plugin--s2member-pro-stripe-ajax-tax")); ?>',Z='<div><img src="'+ws_plugin__s2member_escAttr(C.src)+'" alt="" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("calculating sales tax...", "s2member-front", "s2member")); ?></div>',Y=function(){E=c.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(admin_url("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_stripe_ajax_tax",ws_plugin__s2member_pro_stripe_ajax_tax:X,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[attr]":W,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[state]":R,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[country]":T,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[zip]":S},function(aa,ab){clearTimeout(l),l=0;if(typeof aa==="object"&&aa.hasOwnProperty("tax")){c(J).html("<div>"+c.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((aa.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Today", "s2member-front", "s2member")); ?>':""),((aa.tax_per)?"<em>"+aa.tax_per+"</em> ( "+aa.cur_symbol+""+aa.tax+" )":aa.cur_symbol+""+aa.tax),((aa.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Today", "s2member-front", "s2member")); ?>':""),aa.cur_symbol+""+aa.total)+"</div>")}},"json")};c(J).html(Z),l=setTimeout(Y,((V&&V.keyCode)?1000:100))}else{if(!R||!T||!S||!U){clearTimeout(l),l=0,i="";if(E){E.abort()}c(J).html("")}}};setInterval(function(){I({interval:true})},1000),c(H+" input#s2member-pro-stripe-"+Q+"-state").on("keyup blur",I).on("cut paste",s),c(H+" input#s2member-pro-stripe-"+Q+"-zip").on("keyup blur",I).on("cut paste",s),c(H+" select#s2member-pro-stripe-"+Q+"-country").on("change",I),I()}z=function(R){if(c(t+" input#s2member-pro-stripe-"+Q+"-payment-not-required-or-not-possible").length){c(m).val("free")}var S=c(m).val();if(S){if(S==="free"){c(A).hide(),c(A+" > div.s2member-pro-stripe-"+Q+"-form-div").hide(),c(A+" > div.s2member-pro-stripe-"+Q+"-form-div :input").attr(h)}else{c(A).show(),c(A+" > div.s2member-pro-stripe-"+Q+"-form-div").show(),c(A+" > div.s2member-pro-stripe-"+Q+"-form-div :input").attr(B)}if(S!=="free"&&w){c(H).show(),c(H+" > div.s2member-pro-stripe-"+Q+"-form-div").show(),c(H+" > div.s2member-pro-stripe-"+Q+"-form-div :input").attr(B)}else{c(H).hide(),c(H+" > div.s2member-pro-stripe-"+Q+"-form-div").hide(),c(H+" > div.s2member-pro-stripe-"+Q+"-form-div :input").attr(h)}if(R){c(t+" button#s2member-pro-stripe-"+Q+"-submit").focus()}}else{if(!S){c(A).show(),c(A+" > div.s2member-pro-stripe-"+Q+"-form-div").show(),c(A+" > div.s2member-pro-stripe-"+Q+"-form-div :input").attr(B);c(H).hide(),c(H+" > div.s2member-pro-stripe-"+Q+"-form-div").hide(),c(H+" > div.s2member-pro-stripe-"+Q+"-form-div :input").attr(h)}}};z();c(y).on("click",function(){var R=StripeCheckout.configure({key:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_publishable_key"]); ?>',zipCode:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_validate_zipcode"]); ?>'=="1",image:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_image"]); ?>',panelLabel:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Add", "s2member-front", "s2member")); ?>',email:c(K+" input#s2member-pro-stripe-"+Q+"-email").val(),allowRememberMe:true,token:function(S){c(m).val(S.id),c(x).val(n(S)),c(f).html(ws_plugin__s2member_escHtml(n(S))),z()}});R.open()});P.on("submit",function(){if(c.inArray(c(q).val(),["option","apply-coupon"])===-1){var U=this,S="",R="",X="",T=c(L+" input#recaptcha_response_field"),W=c(K+" input#s2member-pro-stripe-"+Q+'-password1[aria-required="true"]'),V=c(K+" input#s2member-pro-stripe-"+Q+"-password2");if(!c(m).val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("No Billing Method; please try again.", "s2member-front", "s2member")); ?>');return false}c(":input",U).each(function(){var Y=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(Y&&(S=c.trim(c('label[for="'+Y.replace(/-(month|year)/,"")+'"]',U).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(R=ws_plugin__s2member_validationErrors(S,this,U)){X+=R+"\n\n"}}});if((X=c.trim(X))){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+X);return false}else{if(W.length&&c.trim(W.val())!==c.trim(V.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(W.length&&c.trim(W.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(T.length&&!T.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}}c(g).attr(D),c(M).attr(D),c(j).attr(D),ws_plugin__s2member_animateProcessing(c(j));return true})})(u)}}}}var n=function(O){if(typeof O!=="object"){return""}if(O.type==="bank_account"&&O.bank_account){return O.bank_account.bank_name+": xxxx..."+O.bank_account.last4}if(O.type==="card"&&O.card){return O.card.brand+": xxxx-xxxx-xxxx-"+O.card.last4}return"Token: "+O.id};c("div#s2member-pro-stripe-form-response").each(function(){scrollTo(0,c(this).offset().top-100)})}});