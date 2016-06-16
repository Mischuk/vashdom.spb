$(document).ready(function() {
    // Admin panel
    function adminPanel() {
        $('[data-vd="form-new-user-username"]').on('keyup', function(){
            $('[data-vd="admin-new-user-title"]').text($(this).val());
        });
    };
    adminPanel();
    // end Admin panel
});