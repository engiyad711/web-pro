/* التفاعلات والتحقق في مشروع وِجهة */
$(function () {
  // زر القائمة وإظهار إشعار ترحيبي باستخدام Toastify
  $("[data-toast]").on("click", function () {
    Toastify({
      text: $(this).data("toast"),
      duration: 3000,
      gravity: "top",
      position: "left",
      backgroundColor: "#0f766e",
    }).showToast();
  });

  // تحقق موحد لنماذج الدخول وإنشاء الحساب والتواصل
  $(".validated-form").on("submit", function (e) {
    e.preventDefault();
    const form = this;
    if (!form.checkValidity()) {
      e.stopPropagation();
      $(form).addClass("was-validated");
      Toastify({
        text: "يرجى مراجعة الحقول المطلوبة",
        duration: 3000,
        backgroundColor: "#dc2626",
      }).showToast();
      return;
    }
    const type = $(form).data("form-type") || "النموذج";
    Toastify({
      text: `تم إرسال ${type} بنجاح (تجريبيًا)`,
      duration: 3500,
      backgroundColor: "#0f766e",
    }).showToast();
    form.reset();
    $(form).removeClass("was-validated");
  });

  // تحميل محتوى نافذتي Ajax من ملفات partials
  $(".ajax-modal").on("show.bs.modal", function (e) {
    const modal = $(this),
      target = modal.find(".ajax-content");
    if (target.data("loaded")) return;
    target.html(
      '<div class="text-center p-4"><i class="fas fa-spinner fa-spin"></i> جارٍ التحميل...</div>',
    );
    $.get(modal.data("url"), function (html) {
      target.html(html).data("loaded", true);
    }).fail(function () {
      target.html('<p class="text-danger">تعذر تحميل المحتوى حاليًا.</p>');
    });
  });

  // تفاعل jQuery لإخفاء/إظهار تفاصيل الخدمة
  $(".toggle-details").on("click", function () {
    const button = $(this);
    const details = button.closest(".card-custom").find(".details");

    details.stop(true, true).slideToggle(250);
    const isVisible = details.is(":visible");
    button.attr("aria-expanded", isVisible);
    button.find("i").toggleClass("fa-chevron-down fa-chevron-up");
    button.contents().first()[0].textContent = isVisible
      ? "إخفاء التفاصيل "
      : "التفاصيل ";
  });
});
