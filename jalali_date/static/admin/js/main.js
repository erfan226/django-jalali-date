/**
 * Created by arman on 7/24/16.
 */
// $(document).ready(function () {
//     let JQ = jQuery || {};
//     if (typeof django !== 'undefined') {
//         JQ = django.jQuery;
//     }

//     // JQ(".jalali_date-date").datepicker({
//     //     dateFormat: "yy-mm-dd",
//     //     changeMonth: !0,
//     //     changeYear: !0,
//     //     yearRange: "c-5:c+5"
//     // })
//     jalaliDatepicker.startWatch();

// });

window.onload = function () {
    jalaliDatepicker.startWatch(
        {
            separatorChars: {
                date: "/"
            },
            time: false,
            zIndex: 999999999,
            hasSecond: false,
            hideAfterChange: true,
        }
    );
}