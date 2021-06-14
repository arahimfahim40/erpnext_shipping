frappe.listview_settings['View Towing Rate'] = {

	onload: function(listview) {
		 frm.add_custom_button(__("Do Something"), function() {
            console.log("Did something");
        });
    });
};