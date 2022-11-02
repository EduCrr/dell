$(".presentationArrow").click(function () {
  $(this).toggleClass("presentationArrowActive");
  $(this).parent().children(".closeText").slideToggle(500);
});

$(".faqArrow").click(function () {
  $(this).parent().next(".closeFaqText").slideToggle("slow");
  $(this).toggleClass("presentationArrowActive");
});
