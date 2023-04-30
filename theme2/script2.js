$(".button").click(function () {
  var $btn = $(this),
    $step = $btn.parents(".modal-body"),
    stepIndex = $step.index(),
    $pag = $(".modal-header span").eq(stepIndex);

  if (stepIndex === 0) {
    stepNext($step, $pag);
  } else if (stepIndex === 1) {
    stepBack($step, $pag);
  }
  else {
    step3($step, $pag);
  }
});

$(".buttonNext").click(function () {
  var $btn = $(this),
    $step = $btn.parents(".modal-body"),
    stepIndex = $step.index(),
    $pag = $(".modal-header span").eq(stepIndex);

  stepNext($step, $pag);
});

$(".buttonBack").click(function () {
  var $btn = $(this),
    $step = $btn.parents(".modal-body"),
    stepIndex = $step.index(),
    $pag = $(".modal-header span").eq(stepIndex);

  stepBack($step, $pag);
});


function step1($step, $pag) {
  console.log("step1");
  // animate the step out
  $step.addClass("animate-out");

  // animate the step in
  setTimeout(function () {
    $step.removeClass("animate-out is-showing").next().addClass("animate-in");
    $pag.removeClass("is-active").next().addClass("is-active");
  }, 600);

  // after the animation, adjust the classes
  setTimeout(function () {
    $step.next().removeClass("animate-in").addClass("is-showing");
  }, 1200);
}

function step3($step, $pag) {
  console.log("3");

  // animate the step out
  $step.parents(".modal-wrap").addClass("animate-up");

  setTimeout(function () {
    $(".rerun-button").css("display", "inline-block");
  }, 300);
}

function stepNext($step, $pag) {
  // animate the current step out
  $step.addClass("animate-out");

  // animate the next step in
  setTimeout(function () {
    $step.removeClass("animate-out is-showing").next().addClass("animate-in");
    $pag.removeClass("is-active").next().addClass("is-active");
  }, 600);

  // after the animation, adjust the classes
  setTimeout(function () {
    $step.next().removeClass("animate-in").addClass("is-showing");
  }, 1200);
}

function stepBack($step, $pag) {
  // animate the current step out
  $step.addClass("animate-out");

  // animate the previous step in
  setTimeout(function () {
    $step.removeClass("animate-out is-showing").prev().addClass("animate-in");
    $pag.removeClass("is-active").prev().addClass("is-active");
  }, 600);

  // after the animation, adjust the classes
  setTimeout(function () {
    $step.prev().removeClass("animate-in").addClass("is-showing");
  }, 1200);
}


$(".rerun-button").click(function () {
  location.reload();
  $(".modal-wrap")
    .removeClass("animate-up")
    .find(".modal-body")
    .first()
    .addClass("is-showing")
    .siblings()
    .removeClass("is-showing");

  $(".modal-header span")
    .first()
    .addClass("is-active")
    .siblings()
    .removeClass("is-active");
  $(this).hide();
});
