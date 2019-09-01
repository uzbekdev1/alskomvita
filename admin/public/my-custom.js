$(function () {
	if (typeof CKEDITOR !== 'undefined') {
		CKEDITOR.replaceAll(function (textarea, config) {
			// exclude textareas that are inside hidden inline rows
			if ($(textarea).parents('tr').hasClass('blank')) return false;
			// textareas with this class name will get the default configuration
			if (textarea.className.indexOf('ck-full') != -1) return true;
			// textareas with this class name will have custom configuration
			if (textarea.className.indexOf('ck-compact') != -1)
				return setCustomConfig(config);
			// all other textareas won't be initialized as ckeditors
			return false;
		});
	}

	if (typeof tinyMCE !== 'undefined') {
		// it's important to initialize only the visible textareas
		$('tr:not(.blank) .tinymce').tinymce({});
	}
});

// ckeditor only
function setCustomConfig (config) {
	config = config || {};
	// toolbar
	config.toolbarGroups = [
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
		'/',
		{ name: 'styles' },
		{ name: 'colors' }
	];
	config.removeButtons = 'Smiley,SpecialChar,PageBreak,Iframe,CreateDiv';
	return config;
}

// executed each time an inline is added
function onAddInline (rows) {
	if (typeof CKEDITOR !== 'undefined') {
		// for each of the new rows containing textareas
		$('textarea', rows).each(function (index) {
			// get the DOM instance
			var textarea = $(this)[0];
			// textareas with this class name will get the default configuration
			if (textarea.className.indexOf('ck-full') != -1) return CKEDITOR.replace(textarea);
			// textareas with this class name will have custom configuration
			if (textarea.className.indexOf('ck-compact') != -1)
				return CKEDITOR.replace(textarea, setCustomConfig());
			// all other textareas won't be initialized as ckeditors
			return false;
		});
	}

	if (typeof tinyMCE !== 'undefined') {
		// init tinymce editors
		$('.tinymce', rows).tinymce({});
	}
}
