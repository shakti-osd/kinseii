// $(document).ready(function($){
//   $('.pagination-table tbody').paginathing({
//     perPage: 6,
//     insertAfter: '.pagination-table',
//     pageNumbers: true
//   });
// });

$(document).ready(function () {
	$(function() {
	  $(".menu-trigger").click(function() {
	    $(this).toggleClass("active");
	    $('body').toggleClass("app-sidebar-closed");
	  });
	});

  $('.reply-btn,.send-btn').click(function(){
    $(this).closest('.media').find('.msg-box').slideToggle();
  });

  $(".listing-gutter .onetime-fixed-tab").click(function(){
    $(".onetime-fixed-event, .onetime-recurring-event, .age-range, .onetime-fixed-recurring-appointment-future, .form-actions").removeClass('hide');
    $(".recurring-fixed-event, .onetime-appointment-event, .recurring-collection-event").addClass('hide');

  });
  $(".listing-gutter .onetime-recurring-tab").click(function(){
    $(".onetime-fixed-event, .onetime-appointment-event, .recurring-collection-event").addClass('hide');
    $(".recurring-fixed-event").removeClass('hide');
  });
  $(".listing-gutter .onetime-appointment-tab").click(function(){
    $(".onetime-fixed-event, .recurring-fixed-event, .onetime-recurring-event, .recurring-collection-event").addClass('hide');
    $(".onetime-appointment-event").removeClass('hide');
  });

  $(".listing-gutter .recurring-tab").click(function(){
    $(".onetime-fixed-event, .recurring-fixed-event, .onetime-recurring-event, .onetime-appointment-event, .recurring-existing-event, .onetime-fixed-recurring-appointment-future, .age-range, .form-actions, .recurring-collection-event").addClass('hide');
    $("#onetime3").addClass('hides');
  });
  $(".listing-gutter .recurring-existing-tab").click(function(){
    $(".recurring-existing-event, .onetime-fixed-recurring-appointment-future, .form-actions").removeClass('hide');
    $(".recurring-collection-event").addClass('hide');
  });
  $(".listing-gutter .recurring-collection-tab").click(function(){
    $(".recurring-collection-event").removeClass('hide');
    $(".recurring-existing-event, .onetime-fixed-recurring-appointment-future, .form-actions").addClass('hide');
  });
  $(".listing-gutter .form-next a.btn").click(function(){
    $(".recurring-collection-event").addClass('hide');
    $(".recurring-existing-event, .onetime-fixed-recurring-appointment-future, .form-actions").removeClass('hide');
  });

  $(".listing-gutter .onetime-tab").click(function(){
    $(".recurring-collection-event").removeClass('hide');
    $(".recurring-existing-event, .onetime-fixed-recurring-appointment-future, .recurring-collection-event, .form-actions").addClass('hide');
  });

  $(".listing-gutter .onetime-tab").click(function(){
    $("#onetime3").addClass('hides');
  });

  $(".listing-gutter .onetime-fixed-tab, .listing-gutter .onetime-recurring-tab, .listing-gutter .onetime-appointment-tab").click(function(){
    $("#onetime3").removeClass('hides');
  });


  
});



  // $('.dropdown-toggle').dropdown();
  //   $('.dropdown-menu li').on('click', function() {
  //     $(this).closest('.dropdown-btn').find('.dropdown-toggle').html($(this).find('a').html());
  // });
  // $(".dropdown-menu li a").click(function(){
  //   var selText = $(this).text();
  //   $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  // });
  
  //$(".range").slider({});

// Without JQuery
// var slider = new Slider('#ex2', {});


//   $('.form_datetime').datetimepicker({
//         //language:  'fr',
//         weekStart: 1,
//         todayBtn:  1,
//     autoclose: 1,
//     todayHighlight: 1,
//     startView: 2,
//     forceParse: 0,
//         showMeridian: 1
//     });
//   $('.form_date').datetimepicker({
//         language:  'fr',
//         weekStart: 1,
//         todayBtn:  1,
//     autoclose: 1,
//     todayHighlight: 1,
//     startView: 2,
//     minView: 2,
//     forceParse: 0
//     });
//   $('.form_time').datetimepicker({
//         language:  'fr',
//         weekStart: 1,
//         todayBtn:  1,
//     autoclose: 1,
//     todayHighlight: 1,
//     startView: 1,
//     minView: 0,
//     maxView: 1,
//     forceParse: 0
//     });

//   // Without JQuery
//   // var slider = new Slider('#ex1', {
//   //   formatter: function(value) {
//   //     return 'Current value: ' + value;
//   //   }
//   // });
//   $(document).on('click','.onetime-next.onetime-step-1',function(){ 
//     $('.onetime-step-1').removeClass('hide');
//     $(this).removeClass('onetime-step-1');
//     $(this).addClass('onetime-step-2');
//   });
//   $(document).on('click','.onetime-next.onetime-step-2',function(){ 
//     $('.onetime-step-2').removeClass('hide');
//     $(this).addClass('hide');
//   });
//   $(document).on('click','.recurring-next.recurring-step-1',function(){ 
//     $('.recurring-step-1').addClass('hide');
//     $('.recurring-step-2').removeClass('hide');
//     $(this).removeClass('recurring-step-1');
//     $(this).addClass('recurring-step-2');
//   });
// });   


// $(document).ready(function() { 
//   $("#dash-slide").owlCarousel({
//     stopOnHover : true,
//     navigation:false,
//     paginationSpeed : 1000,
//     goToFirstSpeed : 2000,
//     singleItem : true,
//   });
//   $('#datatables').DataTable({
//     "bLengthChange": false,
//     "filter": false,
//   }); 
// });