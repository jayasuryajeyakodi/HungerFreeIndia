function removeClass(element, className) {
	element.className = element.className.replace(className,'');
}
function addClass(element, className) {
	element.classList.add(className);
}

function detailtab(currTab){
  var allTabs = document.querySelectorAll('[data-detail-tab]');
  var allCont = document.querySelectorAll('[data-detail-tab-content]');
  for(at=0;at<allTabs.length;at++){
    removeClass(allTabs[at],'theme-prod-detail-tab-active');
  }
  for(ac=0;ac<allCont.length;ac++){
    removeClass(allCont[ac],'theme-prod-detail-tab-content-active');
  }
  var activetabVal = currTab.getAttribute('data-detail-tab');
  var activeCont = document.querySelectorAll('[data-detail-tab-content="'+activetabVal+'-content"]')[0];
  addClass(currTab,'theme-prod-detail-tab-active');
  addClass(activeCont,'theme-prod-detail-tab-content-active')
}

function activeThumbnail(){
    var prodId;
    var thumbNailsAtt = document.querySelectorAll('[data-thumbnail]');
    for(dt=0;dt<thumbNailsAtt.length;dt++){
        prodId = thumbNailsAtt[dt].getAttribute('data-thumbnail');
    }
    var thumbNails = document.querySelectorAll('[data-thumbnail="'+prodId+'"]');
    for(tn=0;tn < thumbNails.length; tn++){
       removeClass(thumbNails[tn],'theme-active-thumbnail');
    }
    if(thumbNails[0]){
      addClass(thumbNails[0],'theme-active-thumbnail');
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
	activeThumbnail();
});
function productQuantity(event) {
  var key = event.which || event.keyCode;
  var result;
  if (key == 8 || key == 46 || key == 37 || key == 39 || ( key > 47 && key < 58 )) {
    result = true;
  }
  else {
    result = false;
  }
  return result;
}
function getTargetContainer(element) {
  var targetContainer = (element) ? element.closest("[data-zs-product-id]") : "";
  return targetContainer;
}
function increaseCount(e){
	var targetContainer = getTargetContainer(e);
  var quantity_input = (targetContainer && targetContainer != "") ? targetContainer.querySelector("[data-zs-quantity]") : "";
  var quantity = quantity_input.value;
  if( !isNaN( quantity )){
    quantity_input.value++;
  }
  return false;
}
function decreaseCount(e){
	var targetContainer = getTargetContainer(e);
  var quantity_input = (targetContainer && targetContainer != "") ? targetContainer.querySelector("[data-zs-quantity]") : "";
  var quantity = quantity_input.value;
  if( !isNaN( quantity ) && quantity > 1 ) {
    quantity_input.value--;
  }
  return false;
}
function selectcolor(currentcolor,selectedAttribute){
	var targetContainer = getTargetContainer(currentcolor);
	var currentcolorInput = currentcolor.firstElementChild;
	var colorAttrNameContainer = targetContainer.querySelectorAll('[data-zs-attribute-name="'+selectedAttribute+'"]')[0];
	var colorLabel = colorAttrNameContainer.querySelectorAll("[data-theme-color-label]");
	for(var cc = 0; cc < colorLabel.length; cc++){
		removeClass(colorLabel[cc],'chekedLabel');
	}
	if (currentcolorInput.checked == true){
		addClass(currentcolor,'chekedLabel');
	}
	else{
		removeClass(currentcolor,'chekedLabel');
	}
}
function selectVariant(currentVariant,selectedAttribute){
	var targetContainer = getTargetContainer(currentVariant);
	var currentVariantInput = currentVariant.firstElementChild;
	var variantAttrNameContainer = targetContainer.querySelectorAll('[data-zs-attribute-name="'+selectedAttribute+'"]')[0];
	var variantLabel = variantAttrNameContainer.querySelectorAll("[data-theme-variant-label]");
	for(var cc = 0; cc < variantLabel.length; cc++){
		removeClass(variantLabel[cc],'chekedLabel');
	}
	if (currentVariantInput.checked == true){
		addClass(currentVariant,'chekedLabel');
	}
	else{
		removeClass(currentVariant,'chekedLabel');
	}
}
function viewProductQuickLook (span) {
  var productLookUpUrl = span.getAttribute("data-zs-product-url");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("product_quick_look").innerHTML = this.responseText;
			$E.dispatch(document.body,'quickview:opened');

			try {
      cart.productQuickLookAddToCart();
      } catch(e) {
      }

      var thumbNailsAtt = document.querySelectorAll('[data-thumbnail]');
			var prodId;
      for(dt=0;dt<thumbNailsAtt.length;dt++){
          prodId = thumbNailsAtt[dt].getAttribute('data-thumbnail');
      }
			if(prodId){
	      var thumbNails = document.querySelectorAll('[data-thumbnail="'+prodId+'"]');
	      for(tn=0;tn < thumbNails.length; tn++){
	         removeClass(thumbNails[tn],'theme-active-thumbnail');
	      }
	      if(thumbNails[0]){
	        addClass(thumbNails[0],'theme-active-thumbnail');
	      }
			}
			multi_currency.convertCurrencyPrice();
    }
  };
  xhttp.open("GET", productLookUpUrl, true);
  xhttp.send();
	document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

function closeProductQuickLook (e) {
	var prodQuickLook = document.getElementById("product_quick_look");
	if(prodQuickLook){
  	document.getElementById("product_quick_look").innerHTML = "";
	}
	document.getElementsByTagName("body")[0].style.overflow = 'auto';
	$E.dispatch(document.body,'quickview:closed');
}

document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        closeProductQuickLook();
    }
};

function showDetailImage(thisel){
	var prodId = thisel.getAttribute('data-thumbnail');
	var imgId = thisel.getAttribute('data-thumbnail-active');
	var thisImg = thisel.getElementsByTagName('img')[0];
	var imgUrl = thisImg.getAttribute('data-image-resolution');
	var imageLoadingOverlay = document.querySelectorAll('[data-theme-image-overlay="theme-image-overlay-'+prodId+'"]')[0];
	imageLoadingOverlay.style.display = "block";
  var detailImage = document.querySelectorAll('[data-detail-image="theme-detail-image-'+prodId+'"]')[0];
  var activeImage = document.querySelectorAll('[data-thumbnail-active="'+imgId+'"]')[0];
	var imgAlt = thisImg.getAttribute('alt');
	var imgTitle = thisImg.getAttribute('title');
	detailImage.setAttribute('alt',imgAlt);
	detailImage.setAttribute('title',imgTitle);
	detailImage.setAttribute('src',imgUrl);
	detailImage.onload = function(){
		imageLoadingOverlay.style.display = "none";
	}
  var thumbNails = document.querySelectorAll('[data-thumbnail="'+prodId+'"]');
  for (i=0;i<thumbNails.length;i++){
    thumbNails[i].className = thumbNails[i].className.replace('theme-active-thumbnail','');
  }
  addClass(activeImage,'theme-active-thumbnail');
}

function hideCurrency(){
    var currencyList = document.querySelectorAll('[data-theme-currency-list]');
    var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
    var currencyHideOverlay = document.querySelector('[data-theme-currency-hide-overlay]');
		var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
		var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
    for(cur=0;cur<currencyList.length;cur++){
      currencyList[cur].style.display = 'none';
      currencyListContainer.firstChild.style.display = "flex";
      removeClass(currencyListContainer,'theme-currency-open');
		}
    currencyHideOverlay.style.display = "none";
		currencyMobileOpenTop.style.display = "none";
		removeClass(resMenu,'theme-change-zindex');
}
function closeCurrencyMobile(){
	var currencyList = document.querySelectorAll('[data-theme-currency-list]');
	var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
	var currencyHideMobile = document.querySelector('[data-theme-currency-hide-mobile]');
	var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
	var menuId = currencyListContainer.getAttribute('data-theme-currency-list-ul');
  var menuClose = document.querySelector('[data-zp-burger-clickable-area="'+menuId+'"]');
	var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
	for(cur=0;cur<currencyList.length;cur++){
		currencyList[cur].style.display = 'none';
		currencyListContainer.firstChild.style.display = "flex";
		removeClass(currencyListContainer,'theme-currency-open');
	}
	menuClose.click();
	currencyHideMobile.style.display = "none";
	currencyMobileOpenTop.style.display = "none";
	removeClass(resMenu,'theme-change-zindex');
}
function currentCurrency(currentList){
	var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
	var currenyOpen = currencyListContainer.classList.contains('theme-currency-open');
  var currencyList = document.querySelectorAll('[data-theme-currency-list]');
	var menuId = currencyListContainer.getAttribute('data-theme-currency-list-ul');
  var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
  var menuClose = document.querySelector('[data-zp-burger-clickable-area="'+menuId+'"]');
	var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
	if(currentList != currencyListContainer.childNodes[0]){
		currencyListContainer.insertBefore(currentList,currencyListContainer.childNodes[0]);
		multi_currency.change(currentList.innerText);
	}
	if(currenyOpen == true){
		menuClose.click();
	}
  currencyMobileOpenTop.style.display = "none";
  if(window.innerWidth <= 992){
      for(cur=0;cur<currencyList.length;cur++){
          currencyList[cur].style.display = 'none';
          currencyListContainer.firstChild.style.display = "flex";
          removeClass(currencyListContainer,'theme-currency-open');
      }
			if(resMenu){
				removeClass(resMenu,'theme-change-zindex');
			}
  }
}

function informMerchantAboutFailureTransaction() {
    if(typeof cart != "undefined"){
        cart.mailMerchantAboutFailureTransaction();
    }
}


// ERROR MESSAGE FUNCTIONS START

var ERROR_MESSAGE = "error_msg";

function addErrorMsg(data) {

    //Incase element is undefined, then error message cannot be shown
    if(!data.element) {
        return;
    }
    if(data.scroll) {
        /**
         * Browser scrollbar scroll to element view area
         * reference ht tps://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
         */
        var target_element  = data.scrollViewElem || data.element;
        target_element.scrollIntoView && target_element.scrollIntoView(data.scrollTopPosition);
    }

    //need to check error is already added to this element

    if(_hasError(data.element)) {
      _removeErrorElement(data.element);
    }
    data.element.onkeydown = _removeError;

		if (data.element.nodeName === 'SELECT' || data.element.hasAttribute('data-onchange-event')){
      data.element.onchange = _removeError;
    }

    var span_element = document.createElement('span');
    span_element.className = ERROR_MESSAGE;
    $D.css(span_element, 'clear', 'both');
    $D.css(span_element, 'display', 'block');
    $D.css(span_element, 'padding', '7px 0');
    $D.css(span_element, 'width', "100%");
    var content = '<span style="color:#E54D42;white-space:normal;">'+ data.message +'</span>';
  setInnerHTMLForElement(span_element, content);
  if(data.element.parentNode) {
      data.element.parentNode.appendChild(span_element);
  }
}

function _hasError(element) {
    if(element && element.parentNode) {
        return $D.getByClass(ERROR_MESSAGE, element.parentNode).length > 0;
    }
    return false;
}

function setInnerHTMLForElement(element, value) {
    if(element) {
      element.innerHTML = value;
    }
}

function _removeError() {
    _removeErrorElement(this);
}

function _removeErrorElement(element) {
    if(_hasError(element) && element.parentNode){
        var error_element = $D.getByClass(ERROR_MESSAGE, element.parentNode);
        for(var i = 0, length = error_element.length; i < length; i++) {
            if(error_element[i]) {
                $D.remove(error_element[i]);
            }
        }
    }
}

// ERROR MESSAGE FUNCTIONS END