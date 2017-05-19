

$('.autoComplete-con input').on('focus', function(){
	
	$('.autoComplete-con').removeClass('suggest-on');	
	$(this).closest('.autoComplete-con').addClass('suggest-on');

	
	$(function(){
		  var currencies = [
			{ value: 'Sumesh', data: 'Sum' },
			{ value: 'Sumesh S M', data: 'Ssm' },
			{ value: 'Sumesh SM', data: 'Sms' },
		  ];
		  
		  // setup autocomplete function pulling from currencies[] array
		  $('#autocomplete').autocomplete({
			lookup: currencies,

		  });

		  

		});


		$(function(){
		  var currencies = [
			{ value: '2Sumesh', data: 'Sum' },
			{ value: '2Sumesh S M', data: 'Ssm' },
			{ value: '2Sumesh SM', data: 'Sms' },
		  ];
		  
		  
		  $('#autocomplete2').autocomplete({
			lookup: currencies,

		  });
		  

		});
	

	
});



