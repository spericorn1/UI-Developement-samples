
$(document).ready(function () {

	//For setting modal compatability in all platform
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

	if (isAndroid)
	{
		$(".modal-open").css('position','fixed');
		$(".modal").css('position','fixed');
	}
	else{
		//
	}


	
	//Permission Table Collapse control	
	$(".click-and-toggle").click(function(){
		var ClickedRow = $(this).attr("data-click");
		$(".left-flex").find("[data-hide='" + ClickedRow + "']").slideToggle();
		$(".left-flex").find("[data-click='" + ClickedRow + "']").find(".click-and-toggle").toggleClass('opend');
	});


	//Permission Show rows from select box - For Small Sreens
	$(".permission-control li").click(function(){
		var CurrentRowId = $(this).attr("rel");
		$('.row-flex').removeClass('default-row-flex');
		$('.c-right').find("[data-row-id='" + CurrentRowId + "']").addClass('default-row-flex');
		
		//alert( $(this).attr("data-row-id") );
	});
	
	
	//Permission - Drop Down
	$(".row-flex .select-options li[rel='deny']").click(function(){
		
		$(this).closest(".select").find(".select-styled").addClass("danger");
		//alert();
	});
	$(".row-flex .select-options li[rel='allow']").click(function(){
		$(this).closest(".select").find(".select-styled").removeClass("danger");
		//alert();
	});
	$(".row-flex .select-options li[rel='inherit']").click(function(){
		$(this).closest(".select").find(".select-styled").removeClass("danger");
		//alert();
	});
	
	
	
	
	//Hero Pnael
	$('.toggle-hero-panel').click(function(){
		$(this).closest('.has-hero-panel').find('.hero-panel').fadeIn();
	});
	
	$('.hero-panel-dismiss, .hero-panel-dismiss-optional').click(function(){
		$(this).closest('.has-hero-panel').find('.hero-panel').fadeOut();
	});
	

	
	
	//Custom input filed	
	$(".has-custom-field .select-options li[rel='custom']").on("click", function(){
		event.preventDefault();
		$(this).closest(".has-custom-field").find(".custom-field-con").addClass("show");

	});
	$(".has-custom-field .dismiss-custom-field-con").click(function(){
		
		$(this).closest(".custom-field-con").removeClass("show");

	});
	

	
	
	//Tool Tip
	$('[data-toggle="tooltip"]').tooltip();
	
	//Tab - Select
	$(".main-search-open").click(function(){
		$(".main-search").toggleClass("search-open");
		
	});
	$(".close-main-search").click(function(){
		$(".main-search").toggleClass("search-open");
	});


	

	
	//Scroll top	
	
	$(".drop-btn").click(function(){
		$(".search-filter-panel").slideToggle();
	});

	
	$(".show-pop-up-nav-for-small").click(function(){
		$(".pop-up-nav-for-small").slideToggle();
	});


	$(".quck-switch").click(function(){
		$(".quick-details-for-small").slideToggle();
	});
	


	//For Sub Menu
		
    $('#btn-drop').on('click', function (e) {
        e.preventDefault();
        $('#submenu').slideToggle(500);
    });

	$("a[data-toggle='dropdown'], div[data-toggle='dropdown']").click(function() {
		if (!$(this).hasClass("skip-this")) {
			$('#submenu.menu-toggled').fadeOut(150);
		}
	});
	
	
	$('a[data-toggle="dropdown"], div[data-toggle="dropdown"]').on('click', function () {
        //$('#submenu').fadeOut(150);
    });
 

    $(window).resize(function () {
        if (innerWidth >= 767) {
            if ($('#submenu').css('display') == 'none') {
                $('#submenu').removeAttr('style');
            }
			$('#submenu').removeClass("menu-toggled");
        }
		else{
			$('#submenu').addClass("menu-toggled");
		}
		
		//var dWidth = $(window).innerWidth();
		
		 if (innerWidth <= 450) {

			//$(".navbar-nav .open .dropdown-menu.notifi-drop").width(innerWidth);
			//$(".navbar-nav .open .dropdown-menu.notifi-drop").css("left","auto");
			
		 }
		
    });


	
	//$('#myModal').modal('show');
	$('#myModal-permissions').modal('show'); // Show modal on page load
	$('#location-settings').modal('show');
	
	
	
	
	
	//User details - detect change
	$('.get-change-in-field :input').on('input', function() {
		//alert('Text1 changed!');
		$(".change-on-filed-change").html('Save&nbsp');
	});
	

	
	$('.label-up-can').each(function(){
		if($(this).val() != ''){
			$(this).closest('.form-group').find('.label-up').addClass('is-up');
		}
	});
	$('.label-up-can').keyup(function(e) { 
		$(this).closest('.form-group').find('.label-up').addClass('is-up');
	});
	
	
	
	//Initialize DataTable
	dataTableFun();
	
	
	
	
	
	//Div navigation
	
	// 1 Go to section
	$('.details-list a').click(function(e) {
		e.preventDefault();
		var path = $(this).attr("data-scroll");
		var anchor = $("#" + path);
		var position = anchor.position().top + $(".scroll-and-get").scrollTop();
		if( $(window).width() > 767 )
			{
				$(".scroll-and-get").animate({scrollTop: position}, 100);
			}
		else
		{
			console.log(position);
			$(".modal").animate({scrollTop: position}, 100);
		}
		$(".pop-up-nav-for-small").slideUp();
	});

	// 2 Make link active
	$('.scroll-and-get').scroll(function() {
	
		var windscroll = $('.scroll-and-get').scrollTop();
		if (windscroll >= 100)
			{
				$('.scroll-and-get section').each(function(i) {
					
					if ($(this).position().top <= 75) {
						$('.details-list a.active, .details-list-lg a.active').removeClass('active');
						$('.details-list a').eq(i).addClass('active');
						$('.details-list-lg a').eq(i).addClass('active');
					}
				});
			}
		else 
			{
				$('.details-list a.active, .details-list-lg a.active').removeClass('active');
				$('.details-list a:first, .details-list-lg a:first').addClass('active');
			}

	}).scroll();
	
	
	
	
	/* Changing URL when modal open */
	

	$(window.location.hash).modal('show');
	
    $('a[data-toggle="modal"]').click(function(){
        window.location.hash = $(this).attr('href');
		
		
    });

    function revertToOriginalURL() {
        var original = window.location.href.substr(0, window.location.href.indexOf('#'))
        history.replaceState({}, document.title, original);
    }

    $('.modal').on('hidden.bs.modal', function () {
        revertToOriginalURL();

    });
	

	
	
	
	
		$(".toggle-section-tigger").click(function(){
			$(this).closest('.toggle-section-panel').toggleClass("toggle-height");	
		});
		
		
		//Modal in a Modal
		function modalInModal(){
			$('.modal-in-modal').on('hidden.bs.modal', function() {
				$('body').addClass('modal-open');
			});
		}
		
		modalInModal();
	
	
	
	//Option Conflict Validation
	$('.select-master .select li').on('click', function(){
		var $this = $(this).closest('.select');
		var GetThisVal = $(this).attr("rel");
		$('.select-master .select').not($this).each(function(){
			var SelectedVal = $(this).closest('.select').find('option:selected').attr("value");			
				if( GetThisVal == SelectedVal){
					alert( SelectedVal );
					//$(this).closest('.select').hide();
				}
		});
	});
	
	
	
	/* High Priority */
	//Permission Page Table -  Adjusting width While collapse
	function setWidthIsection(){
	
		var maxWidth = Math.max.apply( null, $( '.p-name' ).map( function () {
			return $( this ).outerWidth( true );
		}).get() );
		
		maxWidth = maxWidth+15;
		//alert( maxWidth );
		$('.l-one').css('width', maxWidth);

	}
	
	setWidthIsection();
	
	

		
	
}); // Document.ready <<







// ++++++++++++++++++++++  -- ------    Global Funtions >>



// Select Style

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    
	//$styledSelect.text($this.children('option').eq(0).text());
	
	$styledSelect.text($this.children('option:selected').text());
  
	
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();

		//$('#myTab2 li a').eq($(this).val()).tab('show'); 

		
        //console.log($this.val());
		
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});




var getLi = $(".tab-toggle-li li.active a").text();

//alert( getLi );

$(".tab-li-con").text(getLi);

$(".tab-li-con").click(function(){
	$(this).toggleClass("active");
	$(".tab-toggle-li").toggleClass("collapse");
});




$(".tab-toggle-li a").click(function(){
	var changeLi = $(this).text();
	//alert( changeLi );
	$(".tab-li-con").text(changeLi);
	$(".tab-toggle-li").toggleClass("collapse");
});





// ------  datatable ------------------------------ >>

	var dataTableFun = function(){	
		
			
			 var table = $('#example').DataTable({
					
					bPaginate: false,
					bFilter: false,
					bInfo: false,
					autoWidth: false,
					

					
					columnDefs: [
						{ responsivePriority: 1, targets: 0 },
						{ responsivePriority: 2, targets: -2 },
					],
					

					responsive: {
						details: {
							type: 'column',
							target: -1
						}
					},
					
					
					
					columnDefs: [ {
						className: 'control',
						orderable: false,
						targets:   -1
					} ],
					
					
					
					
				  'columnDefs': [{
					 'targets': 0,
					 'searchable': false,
					 'orderable': false,
					 'className': 'dt-body-center',
			
				  }],
				  
				  
				  "ordering": true,
					columnDefs: [{
					  orderable: false,
					  targets: "no-sort"
					}]
				  
				  
				  //'order': [[1, 'asc']]
				  

				  
			   })
			   //.columns.adjust()
				//.responsive.recalc();
			   
				
			   
			   window.onresize = function() {
					table.columns.adjust().responsive.recalc();
				} 

			   // Handle click on "Select all" control
			   $('#example-select-all').on('click', function(){
				  // Get all rows with search applied
				  //var rows = table.rows({ 'search': 'applied' }).nodes();
				  // Check/uncheck checkboxes for all rows in the table
				  //$('input[type="checkbox"]', rows).prop('checked', this.checked);
			   });

			   // Handle click on checkbox to set state of "Select all" control
			   $('#example tbody').on('change', 'input[type="checkbox"]', function(){
				  // If checkbox is not checked
				  if(!this.checked){
					 var el = $('#example-select-all').get(0);
					 // If "Select all" control is checked and has 'indeterminate' property
					 if(el && el.checked && ('indeterminate' in el)){
						// Set visual state of "Select all" control 
						// as 'indeterminate'
						el.indeterminate = true;
					 }
				  }
			   });

			   // Handle form submission event
			   $('#frm-example').on('submit', function(e){
				  var form = this;

				  // Iterate over all checkboxes in the table
				  table.$('input[type="checkbox"]').each(function(){
					 // If checkbox doesn't exist in DOM
					 if(!$.contains(document, this)){
						// If checkbox is checked
						if(this.checked){
						   // Create a hidden element 
						   $(form).append(
							  $('<input>')
								 .attr('type', 'hidden')
								 .attr('name', this.name)
								 .val(this.value)
						   );
						}
					 } 
				  });
			   });
			
			

			
			/* Data table Select count Function */

			var countChecked = function($table, checkboxClass) {
			  if ($table) {
				var chkAll = $table.find(checkboxClass);
				var checked = chkAll.filter(':checked').length;
				var total = chkAll.length;    
				return {
				  total: total,
				  checked: checked
				}
			  }
			}

			$(document).on('change', '.chk', function() {
			  
				var result = countChecked($('#example'), '.chk');

				$('.alert-count #checked').html(result.checked);
				$('#total').html(result.total);
					
				
				
				//alert(result.checked);
				if(result.checked == 0){
					$('.alert-count-panel').fadeOut();
				}else{
					$('.alert-count-panel').fadeIn();
				}

			  
			});

			
			$('#example-select-all').change(function(){
			
				var rows = table.rows({ 'search': 'applied' }).nodes();
				$('input[type="checkbox"]', rows).prop('checked', this.checked);

				var result = countChecked($('#example'), '.chk');

				  if($('#example #example-select-all').is(':checked')){
					  
					  $('.alert-count-panel').fadeIn();
					  
					  $('.alert-count #checked').html(result.checked);
					  $('#total').html(result.total);
					  
				  }
				  
				  else{
					  
					  $('.alert-count-panel').fadeOut();
				  }
				  
 
			}); 
			 
			 
			 
			
			$('.alert-count .dismiss').click(function(){
				
			   $('#example input[type="checkbox"]').each(function() {
				  if($(this).is(':checked'))
					  $(this).prop('checked' , false);
			   });
				

				$('.alert-count-panel').fadeOut();

				 
			});
	 
	}
	

// -----------------    Global Funtions <<










