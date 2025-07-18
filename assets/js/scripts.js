//constants
Dropzone.autoDiscover = false;
// https://www.madebynf.com/journal/neutral-color-palette-inspiration
//https://www.reddit.com/r/webdev/comments/143acrg/show_me_your_portfolios/

$(document).ready( function () {


	Splide.defaults = {
		type: 'slide',
        autoHeight: true
	}

	var editDropzoneMultiple;

	var myDropzoneProfile;

	var editDropzoneProfile;

	let isResettingDropzone = false;

	AOS.init();
	
	var fetch_url = $('.container-parent').attr('data-page');

	var orig_base_url = $("#base_url").val();
  
	function ApiHelperInput(base_url){
		this.base_url = base_url;
	}

  //HELPERS
	ApiHelperInput.prototype.post = function(url, data){
		$.ajax({
			url: this.base_url +  url,
			method: 'POST',
			data: data,
			processData: false,
			contentType: false,
			success: function(){
				toastr.success("Data has been sent.", "Success");
				// location.reload();
			},
			error: function(){
				toastr.error("Data has not been sent. Contact the developer 	", 'Error')
			}
		});
	}

	var api = new ApiHelperInput($("#base_url").val());


	if ($('#myDropzoneProfile').length) {
		var myDropzoneProfile = new Dropzone("#myDropzoneProfile", {
			url: orig_base_url + "upload_image", 
			addRemoveLinks: false,               
			autoProcessQueue: false,
			clickable: false,                    
			acceptedFiles: "image/*",
			maxFiles: 1,
			init: function () {
				this.on("addedfile", function (file) {
				file.previewElement.classList.add('dz-preview-readonly');
				});
			}
		});
	}

	if ($('#editDropzoneProfile').length) {
		editDropzoneProfile = new Dropzone("#editDropzoneProfile", {
		paramName: "file",
		url: orig_base_url + "upload_image",
		addRemoveLinks: true,
		autoProcessQueue: false,
		maxFiles: 1,
		init: function () {
            this.on("addedfile", function (file, xhr, formData){
                this.on("sending", function (file, xhr, formData) {
                formData.append("foreign_id", this.options.params.foreign_id);
                formData.append("origin", "personal_info");
                });
            })

			this.on("removedfile", function (file) {
				if (isResettingDropzone) return;
					if (confirm("Are you sure you want to delete this file?")) {
						if (file.serverId) {
							$.post(`${orig_base_url}delete_file`, { file_id: file.serverId });
						}
						} else {
							this.emit("addedfile", file);
							this.emit("thumbnail", file, file.dataURL);
							this.emit("complete", file);
					}
				});
			}
		});
	}

	if($('#myDropzoneMultiple').length){
		var myDropzone = new Dropzone("#myDropzoneMultiple", {    
			url: orig_base_url + "upload_image", 
			addRemoveLinks: true,
			autoProcessQueue: false,
			uploadMultiple: true,
			parallelUploads: 10,
			init: function () {
				this.on("sending", function (file, xhr, formData) {
				formData.append("origin", fetch_url);
				formData.append("foreign_id", this.options.params.foreign_id);
				});
			},
			success: function()
			{
				toastr.success('Images has been saved successfully.','Success');
			},
			error: function()
			{
				toastr.error('Images in the', 'Error')
			}
		});
	}

	if($('#editDropzoneMultiple').length){
		editDropzoneMultiple = new Dropzone("#editDropzoneMultiple", {
		paramName: "file",
		url: orig_base_url + "upload_image",
		addRemoveLinks: true,
		autoProcessQueue: false,
		uploadMultiple: true,
		parallelUploads: 10,
		init: function () {
			this.on("sending", function (file, xhr, formData) {
			formData.append("foreign_id", $('#hiddenID').val()); 
			formData.append("origin", "projects");
			});

			this.on("removedfile", function (file) {
			if (isResettingDropzone) return;
			if (confirm("Are you sure you want to delete this file?")) {
				if (file.serverId) {
				$.post(`${orig_base_url}delete_file`, { file_id: file.serverId });
				}
			} else {
				this.emit("addedfile", file);
				this.emit("thumbnail", file, file.dataURL);
				this.emit("complete", file);
			}
			});
		}
		});
	}

	if($('#myDropzoneResume').length){
		var myDropzoneResume = new Dropzone("#myDropzoneResume", {    
		url: orig_base_url + "upload_image", 
		addRemoveLinks: true,
		autoProcessQueue: false,
		init: function () {
		this.on("sending", function (file, xhr, formData) {
			formData.append("origin", fetch_url);
			formData.append("foreign_id", this.options.params.foreign_id);
			});
		this.on("removedFile")//edit this for edit modal remove
		}
		});
	}

	//navigation links
	
	$('.nav-link').on('click', function () {
		$('.nav-link').removeClass('active');
		$(this).addClass('active');
	}); 
	
	if ($('#admin-page').length > 0){
		loadTableDataAdmin(fetch_url);
	}

	if ($('#client-page').length > 0) {
		loadTableDataClient();
	}

	function loadTableDataAdmin(fetch_url) {
		$.ajax({
		url: orig_base_url + 'get_data',
		method: 'GET',
		data: { table: fetch_url},
		dataType: 'json',
		success: function(data) {
			toastr.success(data,'success')
			let html = ``;
			data.forEach(function(row, index){
				if(fetch_url == 'personal_info' && index === 0) {
				console.log(row)
				$('#hiddenprofileid').val(row.id)
				$('#inputName').val(row.name);
				$('#inputTitle').val(row.professional_title);
				$('#inputDesc').val(row.introduction);
				$.ajax({
					url: orig_base_url + 'get_project_files',
					method: 'GET',
					data: {
					foreign_id: row.id,
					origin: 'personal_info'
					},
					dataType: 'json',
					success: function (files) {
						console.log(row.id)
						files.forEach(file => {
							const mockFile = {
							name: file.file_name,
							size: file.size || 12345,
							serverId: file.id
							};
							myDropzoneProfile.emit("addedfile", mockFile);
							myDropzoneProfile.emit("thumbnail", mockFile, file.file_path);
							myDropzoneProfile.emit("complete", mockFile);
						});
					},
					error: function (err) {
						console.error("Profile image preload failed:", err);
					}
				});

				}
				if (fetch_url == 'education') {
                    
					html += `
					<div class="log-row border border-grey rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
						<div class="row my-3">
							<div class="col-6 mx-3 institution-name">
								<label class="fw-bold">Institution Name</label>
								<p>${row.institution_name}</p><br>
							</div>
                            <div class="col-lg-3 col-xs-12 mx-3 educ-type">
								<label class="fw-bold">Type:</label>
								<p>${row.educ_type}</p>
							</div>
                            <div class="col-lg-3 mx-3 acad-year">
								<label class="fw-bold">Academic Year</label>
								<p>${row.acad_year}</p>
							</div>
							<div class="col-lg-12 mx-3 educ-level">
								<label class="fw-bold">Education Level</label>
								<p>${row.education_level}</p>
							</div>
                            <div class="col-lg-12 mx-3 course-name">
								<label class="fw-bold">Course Name</label>
								<p>${row.course_name}</p><br>
							</div>
							<div class="col-lg-12 mx-3 course-link">
								<label class="fw-bold">Course Link</label>
								<p class="text-truncate">${row.course_link}</p><br>
							</div>
							<div class="col-lg-11 mx-3 institution-desc" style="text-align: justify;">
								<label class="fw-bold">Institution Description</label>
								<p>${row.institution_desc}</p>
							</div>
							<div class="col-lg-11 mx-3 log-buttons" style="text-align: end;">
								<button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
								Edit
								</button>
								<button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
								Delete
								</button>
								<button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
									Activate
								</button>
							</div>
						</div>
					</div>
							`
				} else if (fetch_url == 'resume') {
					let filesHTML = '';
					if (row.files && row.files.length > 0) {
						filesHTML = row.files.map(file => `
						<br>
						<iframe src="${file.file_path}" class="embed-responsive-item" style="width:100%; min-height:500px"></iframe>
						`).join('');
					} else {
						filesHTML = '<p>No Files</p>';
					}
					html += `
					<div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
						<div class="row my-3">
							<div class="col-lg-8 col-xs-12 mx-3 resume-name">
								<label class="fw-bold">Resume Name</label>
								<p>${row.resume_name}</p>
							</div>
							<div class="col-lg-2 col-xs-12 mx-3 resume-date">
								<label class="fw-bold">Created At</label>
								<p>${row.created_at}</p>
							</div>
							</div>
							<div class="col-lg-11 col-xs-12 mx-3 resume-desc" style="text-align: justify;">
							<label class="fw-bold">Resume Description</label>
								<p>${row.resume_desc}</p>
							</div>
							<div class="col-lg-11 col-xs-12 mx-3 resume-file d-block gap-2 embed-responsive embed-responsive-4by3" style="">
								<label for="resume-file" class="fw-bold">Resume File</label>
								${filesHTML}
							</div>
							<div class="col-lg-11 mx-3 col-xs-12 mb-3 log-buttons" style="text-align: end;">
								<button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
								Delete
								</button>
								<button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
									Activate
								</button>
							</div>
						</div>
					</div>`
				} else if (fetch_url == 'skills') {
                    html +=
                    `
                    <div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
                        <div class="row my-3">
                            <div class="col-6 mx-3 skill-name">
                                <label class="fw-bold">Skill Name</label>
                                <p>${row.skill_name}</p>
                            </div>
                            <div class="col-3 skill-progress">
                                <label class="fw-bold">Skill Progress</label>
                                <p>${row.skill_progress}</p>
                            </div>
                            <div class="col-2 skill-createdat">
                                <label class="fw-bold">Date Created</label>
                                <p>${row.created_at}</p>
                            </div>
                            <div class="col-11 mx-3 skill-desc" style="text-align: justify;">
                                <label class="fw-bold">Skill Description</label>
                                <p>${row.skill_desc}</p>
                            </div>
                            <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                                <button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                                </button>
                                <button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
                                Delete
                                </button>
                                <button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
                                    Activate
                                </button>
                            </div>
                        </div>
                    </div>
                    `
				} else if (fetch_url == 'projects') {
					let imageHTML = '';
					if (row.images && row.images.length > 0) {
						imageHTML = row.images.map(img => `
						<img src="${img.file_path}" alt="project image" style="width: auto; height: 200px;" />
						`).join('');
					} else {
						imageHTML = '<p>No images</p>';
					}

					html += `
					<div class="log-row border border-white rounded my-3" data-id=${row.id} data-isactive=${row.is_active}>
						<div class="row my-3">
							<div class="col-6 mx-3 proj-name">
								<label for="proj-name" class="fw-bold">Project Name</label>
								<p>${row.project_name}</p>
							</div>
							<div class="col-3 proj-role">
								<label for="proj-role" class="fw-bold">Project Roles</label>
								<p>${row.project_role}</p>
							</div>
							<div class="col-11 mx-3 proj-tech" style="text-align: justify;">
								<label for="proj-tech" class="fw-bold">Project Technologies</label>
								<p>${row.project_tech}</p>
							</div>
							<div class="col-11 mx-3 proj-desc" style="text-align: justify;">
								<label for="proj-desc" class="fw-bold">Project Description</label>
								<p>${row.project_desc}</p>
							</div>
							<div class="col-11 mx-3 proj-images d-block flex-wrap gap-2">
								<label for="proj-images class="fw-bold"><strong>Project Images</strong></label>
								<br>
								${imageHTML}
							</div>
							<div class="col-11 mx-3 log-buttons" style="text-align: end;">
								<button type="button" class='btn btn-secondary btn-edit' data-id=${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
									Edit
								</button>
								<button type="button" class='btn btn-danger btn-delete' data-id=${row.id}>
									Delete
								</button>
								<button type="button" class='btn btn-success btn-activate' data-id=${row.id}>
									Activate
								</button>
							</div>
						</div>
					</div>
					`;
				} else if (fetch_url == 'exp') {
                    html +=
                    `
                    <div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
                        <div class="row my-3">
                            <div class="col-6 mx-3 exp-title">
                                <label class="fw-bold">Professional Title</label>
                                <p>${row.professional_title}</p>
                            </div>
                            <div class="col-3 company-name">
                                <label class="fw-bold">Company Name</label>
                                <p>${row.company_name}</p>
                            </div>
                            <div class="col-2 prof-year">
                                <label class="fw-bold">Professional Year</label>
                                <p>${row.prof_year}</p>
                            </div>
                            <div class="col-11 mx-3 company-desc" style="text-align: justify;">
                                <label class="fw-bold">Company Description</label>
                                <p>
                                ${row.company_desc}
                                </p>
                            </div>
                            <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                                <button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                                </button>
                                <button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
                                Delete
                                </button>
                                <button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
                                    Activate
                                </button>
                            </div>
                        </div>
                    </div>
                    ` 
				} else if (fetch_url == 'contact'){
                    let contactId = `proj-${row.id}`;
                    html +=
                    `
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button px-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${contactId}">
                        <div class="row w-100">
                            <div class="col-4 col-md-4 my-2 text-truncate">
                                <span>${row.contact_name}</span>
                            </div>
                            <div class="col-6 col-md-4 my-2 text-truncate">
                                <span class="fw-bold d-flex">${row.contact_subject}</span>
                            </div>
                            <div class="col-2 col-md-4 my-2">
                                <span>${row.created_at}</span>
                            </div>
                        </div>
                        </button>
                        </h2>
                        <div id="${contactId}" class="accordion-collapse collapse">
                            <div class="accordion-body p-4">
                                <span class="fw-bold">${row.contact_subject}</span></br>
                                <span class="fw-italic text-secondary">${row.contact_name} - ${row.contact_email}</span></br></br>
                                
                                <span>${row.contact_message}</span>
                            </div>
                        </div>
                    </div>
                    ` 
				}
			})
			$(".div-logs").append(html)
			
			$('.log-row').each(function () {
				const isActive = $(this).data('isactive');
				if (isActive == 1) {
					$(this).addClass('active-client');
					}
				});
			},
				error: function (status, error)
			{
				toastr.error(status, error);
			}
		});  
	}

	function loadTableDataClient(){
		$.ajax({
		url: orig_base_url + 'get_all_data',
		method: 'GET',
		dataType: 'json',
		success: function (data) {
			toastr.success('Data successfully loaded', 'Success')
			var download_path;
            var profile_img_path;
			var resume = data.resume[0];
			var personal_info = data.personal_info[0];
			var skills = data.skills;
			var education = data.education;
			var experience = data.experience;
			var project = data.projects;
			var images = data.files;

			console.log(data)

			images.forEach(file =>{
				if (file.origin == 'resume' && file.foreign_id == resume.id){
					download_path = file.file_path;
				}

                if (file.origin == 'personal_info' && file.foreign_id >= personal_info.id){
                    profile_img_path = file.file_path;
                }

			}) 


				$('.div-about-me').append(
				`
                    <section class="testimonial position-relative z-index-1">
                    <div class="container-fluid max-width-adaptive-sm">
                        <figure class="flex justify-center margin-bottom-md reveal-fx reveal-fx--scale">
                        <img class="profile-img block width-md height-md radius-50% border border-bg border-2 shadow-sm" src="${orig_base_url}${profile_img_path}" alt="Testimonial picture" style="width: 20rem;">
                        </figure>
                        <div class="text-center">
                        <p class="text-uppercase letter-spacing-md fs-1"><strong>${personal_info.name}</strong></p>
                        <p class="color-contrast-medium margin-top-xxxxs margin-bottom-xxs">${personal_info.professional_title}</p>
                        </div>

                        <div class="testimonial__block-wrapper margin-bottom-lg ">
                        <blockquote class="text-lg text-lg-center line-height-md " style="text-align: justify;">${personal_info.introduction}</blockquote>

                        <svg class="icon icon--xxl color-contrast-higher opacity-10%" aria-hidden="true" viewBox="0 0 64 64"><polygon fill="currentColor" points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"/><polygon fill="currentColor" points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"/></svg>

                        <div class="text-end mt-5">
                            <a data-aos="fade-left" data-aos-duration="2000" href="${orig_base_url}${download_path}" class="btn btn-primary download-cv" id="download-cv" download> Download CV</a>
                        </div>

                        </div>
                        
                        
                    </div>
                    </section>

					
				`);
                // <div class="text-end w-50 me-5">
				// 		<h1 data-aos="fade-left" data-aos-duration="1000" class="context-title">Hi, I'm ${personal_info.name}</h1>
				// 		<h3 data-aos="fade-left" data-aos-duration="1500" class="context-subtitle">${personal_info.professional_title}</h3>
				// 		<p data-aos="fade-left" data-aos-duration="2000">${personal_info.introduction}</p>
				// 		<a data-aos="fade-left" data-aos-duration="2000" href="${orig_base_url}${download_path}" class="btn btn-primary download-cv" id="download-cv" download>Download CV</a>
				// 	</div>
				// 	<img class="profile-img" src="upload/pedro.png" alt="" data-aos="zoom-in"> 
			//fix this one

			skills.forEach(skill => {
				$('.div-skills').append(`
				<div class="skill-container d-flex col-sm-6 col-lg-3 col-md-4 my-5 text-center justify-content-center" data-aos="fade-up" >
					<div class="circular-progress shadow">
					<div class="d-block">
						<span class="progress-skill-name">${skill.skill_name}</span>
						<br>
						<span data-progressvalue = "${skill.skill_progress}" class="progress-value justify-content-center">0%</span>
						</div>
					</div>
				</div>
				`);

				const observer = new IntersectionObserver((entries, observer) => {
					entries.forEach(entry => {
						const container = $(entry.target);
						const circularProgress = container.find(".circular-progress");
						const progressValue = container.find(".progress-value");

						if (entry.isIntersecting) {
							let progressStartValue = 0;
							const progressEndValue = parseInt(progressValue.attr('data-progressvalue'));
							const speed = 5;

							// Save interval ID to container's data
							const intervalId = setInterval(() => {
								progressStartValue++;
								progressValue.text(`${progressStartValue}%`);
								circularProgress.css('background', `conic-gradient(#A5998D ${progressStartValue * 3.6}deg, #ededed 0deg)`);

								if (progressStartValue >= progressEndValue) {
									clearInterval(intervalId);
								}
							}, speed);

							container.data('intervalId', intervalId);
						} else {
							// Reset values
							const intervalId = container.data('intervalId');
							if (intervalId) clearInterval(intervalId);

							progressValue.text(`0%`);
							circularProgress.css('background', `conic-gradient(#A5998D 0deg, #ededed 0deg)`);
						}
					});
				}, {
					threshold: 0.5 // 50% visibility
				  });

				// Observe each skill-container
				$('.skill-container').each(function () {
					observer.observe(this);
				  });
			})
			education.forEach(edu => {
				// $('.div-education').append(
				// `
				// 	<div class="education-item">
				// 		<h2 class="context-title" data-aos="fade-up" data-aos-duration="800">${edu.institution_name}</h2>
                    // <h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1000">${edu.education_level}</h3>
                    // <h5 data-aos="fade-up" data-aos-duration="1200">${edu.acad_year}</h5>
				// 	</div>
				// `)
                let logo_img;
                let course_link = "#";
                if (edu.educ_type == "Institution"){
                    logo_img = "https://cdn-icons-png.flaticon.com/512/535/535239.png";
                };

                if (edu.educ_type == "Certificate"){
                    logo_img = "https://cdn-icons-png.flaticon.com/512/1021/1021129.png";
                    course_link = edu.course_link
                };

                $('.cd-timeline__container').append(
                        `
                        <div data-aos="fade-up" data-aos-duration="200" class="cd-timeline__block">
                        <div data-aos="fade-up" data-aos-duration="500" class="cd-timeline__img cd-timeline__img--picture" style="background: #F9F8F3;">
                            <img data-aos="fade-up" data-aos-duration="700" src="${logo_img}" alt="Picture">
                        </div> <!-- cd-timeline__img -->

                        <div class="cd-timeline__content text-component" style="box-shadow: 0 3px 10px rgb(0 0 0 /0.2);" >
                            <a style="text-decoration: none;"href="${course_link}"><h2 data-aos="fade-up" data-aos-duration="900">${edu.institution_name}</h2></a>
                            <h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1000">${edu.education_level}</h3>
                            <h5 data-aos="fade-up" data-aos-duration="1200">${edu.course_name}</h5>
                            <div class="flex justify-between items-center">
                            <span data-aos="fade-up" data-aos-duration="1200" class="cd-timeline__date">${edu.acad_year}</span>
                            </div>
                            </div> <!-- cd-timeline__content -->
                            </div>
                        `
                    )
			})
			experience.forEach(exp => {
			$('.div-experience').append(
			`
				<div class="experience-item my-5" data-aos="fade-up">
					<h2 class="context-title" data-aos="fade-up" data-aos-duration="1000">${exp.professional_title}</h2>
					<h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1200">${exp.company_name}</h3>
					<h5 data-aos="fade-up" data-aos-duration="1400">${exp.prof_year}</h5>
					<div class="px-lg-5 py-2 w-lg-75">
						<p data-aos="fade-up" data-aos-duration="1800"  style="text-align: justify"> ${exp.company_desc}</p>
					</div>
				</div>
			`
			);
			});
			project.forEach(proj => {
			let projId = `proj-${proj.id}`;
			// $('.div-projects').append(
				
			// `
				// <div class="project-item col-lg-6 col-xl-6 col-sm-12 mt-5" data-aos="fade-up">
				// 	<section class="splide" id="${projId}">
				// 		<div class="splide__track">
				// 		<ul class="splide__list ${projId}">
				// 		</ul>
						
				// 	</section>

					
			// 		<h2 class="context-title">${proj.project_name}</h2>
			// 		<h3 class="context-subtitle">${proj.project_role}</h3>
			// 		<h5 class="context-tech">${proj.project_tech}</h5>
			// 		<p class="context-desc">${proj.project_desc}</p>
			// 	</div>
				
			// `); 
            $('.articles-v3__list-grid').append(
            `
                <div class="project-item" data-aos="fade-up">
                    <li class="articles-v3__item-grid">
                        <a href="#0" class="articles-v3__img-wrapper">
                        <section class="splide" id="${projId}">
                            <div class="splide__track">
                            <ul class="splide__list ${projId}">
                            </ul>
                            
                        </section>
                        </a>
                
                        <div>
                            <h2 class="articles-v3__headline context-title">${proj.project_name}</h2>
                            <h3 class="context-subtitle">${proj.project_role}</h3>
			                <h5 class="context-tech">${proj.project_tech}</h5>
                            <p class="articles-v3__description">${proj.project_desc}</p>
                        </div>
                    </li>
                </div>
            `

            )
            images.forEach(file =>{
                if (file.foreign_id == proj.id && file.origin == 'projects') {
					$(`.${projId}`).append(`
						<li class="splide__slide">
							<img src="${orig_base_url}${file.file_path}" alt="">
						</li>
					`);
				}
			}) 
				$(`.${projId} .slide`).first().attr("data-active", true);
				new Splide(`#${projId}`).mount()
			});
		},
		error: function (status) {
			toastr.error(status,'Something is wrong')
		}
		})
	}

	//log-row buttonw

	$(document).on('click', '.btn-delete', function () {
		let button = $(this);
		let item_id = button.data('id');
		let parentRow = button.closest('.log-row');

		if (!confirm('Are you sure you want to delete this item?')) return;

		$.ajax({
			url: orig_base_url + 'update_status',
			method: 'POST',
			data: {
				id: item_id,
				table: fetch_url
			},
			dataType: 'json',
			success: function (res) {
				if (res.status === 'success') {
					toastr.success(res.message);
					parentRow.remove();
				} else {
					toastr.warning(res.message);
				}
			},
			error: function () {
				toastr.error('Something went wrong.');
			}
		});
	});

	function rowActivation(item_id, parentRow, currentStatus){
		let newStatus = currentStatus === 1 ? 0 : 1;    

        $.ajax({
			url: orig_base_url + 'update_active',
			method: 'POST',
			data: {
				id: item_id,
				table: fetch_url,
				is_active: newStatus 
			},
			dataType: 'json',
			success: function (res) {
				if (res.status === 'success') {
					parentRow.attr('data-isactive', newStatus);

					parentRow.toggleClass('active-client', newStatus === 1);

					toastr.success(res.message);
				} else {
					toastr.warning(res.message);
				}
			},
			error: function () {
				toastr.error('Something went wrong.');
			}
        });
  	}

	$(document).on('click', '.btn-activate', function () {
		let button = $(this);
		let item_id = button.data('id');
		let parentRow = button.closest('.log-row');
		let currentStatus = parseInt(parentRow.attr('data-isactive')); 

			if(fetch_url == 'resume'){
				if($('.active-client').length >= 1){
					if(currentStatus == '1'){
						rowActivation(item_id, parentRow, currentStatus);
					}

					toastr.error('Only one resume can be active', 'Error');
					return
				}
				rowActivation(item_id, parentRow, currentStatus)
			} else {
				rowActivation(item_id, parentRow, currentStatus)
			}
	});

	$(document).on('click', '.btn-edit', function () {
		let button = $(this);
		let item_id = button.data('id');
		let parentRow = button.closest('.log-row');

		if (fetch_url === 'education') {
            if (parentRow.find('.educ-type p').text().trim() == "Institution"){
                $('#editinstitution_type').prop('checked', true);
            }

            if (parentRow.find('.educ-type p').text().trim() == "Certificate"){
                $('#editcertificate_type').prop('checked', true);
            }
            
            
			$('#hiddenID').val(item_id);
            
			$('#editInstitution').val(parentRow.find('.institution-name p').text().trim());
			$('#editLevel').val(parentRow.find('.educ-level p').text().trim());
			$('#editCourseName').val(parentRow.find('.course-name p').text().trim());
            $('#editCourseLink').val(parentRow.find('.course-link p').text().trim())
			$('#editAcadYear').val(parentRow.find('.acad-year p').text().trim());
			$('#editEducDescription').val(parentRow.find('.institution-desc p').text().trim());
		}
		else if (fetch_url == 'skills') {
			$('#hiddenID').val(item_id);
			$('#editSkillName').val(parentRow.find('.skill-name p').text().trim());
			$('#editSkillProgress').val(parentRow.find('.skill-progress p').text().trim());
			$('#editSkillDescription').val(parentRow.find('.skill-desc p').text().trim());
		}
		else if (fetch_url == 'personal_info') {
		
			item_id = $('#hiddenprofileid').val();
			console.log(item_id);
			$('#editName').val($('#inputName').val());
			$('#editTitle').val($('#inputTitle').val());
			$('#editDesc').val($('#inputDesc').val());

		console.log(item_id)

			if (editDropzoneProfile) {
				isResettingDropzone = true;
				editDropzoneProfile.removeAllFiles(true);
				isResettingDropzone = false;
				$.ajax({
					url: `${orig_base_url}get_project_files`,
					method: 'GET',
					data: {
						foreign_id: item_id,
						origin: 'personal_info'
					},
					dataType: 'json',
					success: function (files) {
						console.log(files)
						files.forEach(file => {
						const mockFile = {
							name: file.file_name,
							size: file.size,
							serverId: file.id
					};
						editDropzoneProfile.files.push(mockFile);
						editDropzoneProfile.emit("addedfile", mockFile);
						editDropzoneProfile.emit("thumbnail", mockFile, file.file_path);
                        editDropzoneProfile.emit("completed", mockFile);
					});
				},
				error: function (xhr, status, error) {
					console.error('Error loading files:', error);
				}
			});
		}
		}
		else if (fetch_url == 'projects') {
			$('#hiddenID').val(item_id);
			$('#editProjectName').val(parentRow.find('.proj-name p').text().trim());
			$('#editRole').val(parentRow.find('.proj-role p').text().trim());
			$('#editTechnologies').val(parentRow.find('.proj-tech p').text().trim());
			$('#editProjectDescription').val(parentRow.find('.proj-desc p').text().trim());
			console.log('Fetching files for item_id:', item_id);  

		if (editDropzoneMultiple) {
			isResettingDropzone = true;
			editDropzoneMultiple.removeAllFiles(true);
			isResettingDropzone = false; 
			$.ajax({
				url: `${orig_base_url}get_project_files`,
				method: 'GET',
				data: {
					foreign_id: item_id,
					origin: 'projects'
				},
				dataType: 'json',
				success: function (files) {
					console.log(files)
					files.forEach(file => {
					const mockFile = {
						name: file.file_name,
						size: file.size,
						serverId: file.id
					};
						editDropzoneMultiple.files.push(mockFile);
						editDropzoneMultiple.emit("addedfile", mockFile);
						editDropzoneMultiple.emit("thumbnail", mockFile, file.file_path);
						editDropzoneMultiple.emit("complete", mockFile);
					});
				},
				error: function (xhr, status, error) {
					console.error('Error loading files:', error);
			}
		});
		}  
		} else if (fetch_url == 'exp') {
			$('#hiddenID').val(item_id);
			$('#editCompanyTitle').val(parentRow.find('.exp-title p').text().trim());
			$('#editCompanyName').val(parentRow.find('.company-name p').text().trim());
			$('#editCompanyYears').val(parentRow.find('.prof-year p').text().trim());
			$('#editCompanyDesc').val(parentRow.find('.company-desc p').text().trim());
		}
    });
  
	$(document).on('click', '.btn-edit-submit-educ', function () {
		var formData = new FormData();

        var selectedValue = $('input[name="editeduc_type"]:checked').val();

        formData.append('educ_type', selectedValue);

		formData.append('id', $('#hiddenID').val());
        formData.append('course_link', $('#editCourseLink').val())
		formData.append('institution_name', $('#editInstitution').val());
		formData.append('education_level', $('#editLevel').val());
		formData.append('acad_year', $('#editAcadYear').val());
        formData.append('course_name', $('#editCourseName').val());
		formData.append('institution_desc', $('#editEducDescription').val());
		api.post('handle_educ', formData)
	});

	$(document).on('click', '.btn-edit-submit-skills', () => {
		var formData = new FormData();

		$editSkill = parseInt($("#editSkillProgress").val());
		if(typeof $editSkill === 'string' || $editSkill < 0 ){
			toastr.error("Check your inputs","Error");
		} else {
			formData.append('id', $('#hiddenID').val());
			formData.append("skill_name", $("#editSkillName").val());
			formData.append("skill_progress", $editSkill);
			formData.append("skill_desc", $("#editSkillDescription").val());
			api.post('handle_skills', formData);
		}
	});

	$(document).on('click', '.btn-edit-submit-projects', function () {
		var formData = new FormData();

		const id = $('#hiddenID').val();
		const origin = 'projects';
		formData.append('id', id);
		formData.append("project_name", $("#editProjectName").val());
		formData.append("project_role", $("#editRole").val());
		formData.append("project_tech", $("#editTechnologies").val());
		formData.append("project_desc", $("#editProjectDescription").val());

	$.ajax({
		url: orig_base_url + 'handle_projects',
		method: 'POST',
		data: formData,
		processData: false,
		contentType: false,
		success: function () {
			editDropzoneMultiple.options.params = {
				foreign_id: id,
				origin: origin
			};

			if (editDropzoneMultiple.getQueuedFiles().length > 0) {
				editDropzoneMultiple.processQueue();
			} else {
				$('#editProjectModal').modal('hide'); 
			}

		},
		error: function () {
			alert("Update failed.");
			console.log(formData)
		}
	});
	});

	$(document).on('click', '.btn-edit-submit-exp', () => {
		var formData = new FormData();

		formData.append('id', $('#hiddenID').val());
		formData.append("professional_title", $("#editCompanyTitle").val());
		formData.append("company_name", $("#editCompanyName").val());
		formData.append("prof_year", $("#editCompanyYears").val());
		formData.append("company_desc", $("#editCompanyDesc").val());
        api.post('handle_exp', formData);
	})

  //submit buttons forms

	$('.btn-submit-login').on('click', function () {
		var formData = new FormData();

		formData.append("username", $('#inputUser').val());
		formData.append("password", $('#inputPass').val());

		$.ajax({
			url: orig_base_url + 'handle_login',
			method: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			dataType: 'json',
			success: function (res) {
				if (res.success) {
					toastr.success(res.message, 'Success');
					window.location.href = res.redirect;
                    console.log(res)
				} else {
					toastr.error(res.message, 'Error');
                    console.log(res)
					// window.location.href = res.redirect;
				}
			},
			error: function () {
				toastr.error('Something went wrong', 'Error');
				location.reload();
			}
		});
	});

	$('.btn-submit-contact').on('click', function(){
		var formData = new FormData();

		formData.append("contact_name", $('#inputName').val());
		formData.append("contact_email", $('#inputEmail').val());
		formData.append("contact_subject", $('#inputSubject').val());
		formData.append("contact_message", $('#inputMessage').val());
		api.post('handle_contact', formData);
	});

	$('.btn-submit-about').on('click', function(){
		var formData = new FormData();
		
		if(editDropzoneProfile.files.length === 0){
			toastr.error("Please input all of the fields", "Incomplete fields");
		} else {
			var formData = new FormData();
            formData.append("id",$('#hiddenprofileid').val()),
			formData.append("name", $("#editName").val());
			formData.append("professional_title", $("#editTitle").val());
			formData.append("introduction", $("#editDesc").val());

			$.ajax({
			url: orig_base_url + 'handle_about',
			method: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			success: function(res){
				let response = JSON.parse(res);
				let new_id = response.new_id;
				let origin = 'personal_info';
				console.log(new_id);

				editDropzoneProfile.options.params = { foreign_id: new_id, origin: origin };
				editDropzoneProfile.processQueue();
				}
			});
		}
	})

	$('.btn-submit-resume').on('click', function(){
		var formData = new FormData();

		if(myDropzoneResume.files.length === 0){
			toastr.error("Please input all of the fields", "Incomplete fields");
		} else {
			var formData = new FormData();

			formData.append("resume_name", $("#inputResumeName").val());
			formData.append("resume_desc", $("#inputDesc").val());

			$.ajax({
			url: orig_base_url + 'handle_resume',
			method: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			success: function(res){
				let response = JSON.parse(res);
				let new_id = response.new_id; 
				let origin = 'resume';
				console.log(new_id);
				console.log(formData)
			
				myDropzoneResume.options.params = { foreign_id: new_id, origin: origin };

				myDropzoneResume.processQueue();
			}
			});
		}
	})

	$('.btn-submit-educ').on('click', function () {
		var formData = new FormData();

        var selectedValue = $('input[name="educ_type"]:checked').val();

        formData.append('educ_type', selectedValue);
        formData.append('course_link', $('#inputCourseLink').val())
		formData.append('institution_name', $('#inputInstitution').val());
		formData.append('education_level', $('#inputLevel').val());
		formData.append('acad_year', $('#inputAcadYear').val());
        formData.append('course_name', $('#inputCourseName').val());
		formData.append('institution_desc', $('#inputEducDescription').val());

		api.post('handle_educ', formData) 
	});

	$('.btn-submit-skills').on('click', function () {
		var formData = new FormData();
		$inputSkill = parseInt($("#inputSkillProgress").val());

		if(typeof $inputSkill === 'string' || $inputSkill < 0 )
		{
			toastr.error("Check your inputs","Error");
		} else {
			formData.append("skill_name", $("#inputSkillName").val());
			formData.append("skill_progress", $inputSkill);
			formData.append("skill_desc", $("#inputSkillDescription").val());
			api.post('handle_skills', formData);
		}
	});

	$('.btn-submit-exp').on('click', function () {
		var formData = new FormData();

		formData.append("professional_title", $("#inputCompanyTitle").val());
		formData.append("company_name", $("#inputCompanyName").val());
		formData.append("prof_year", $("#inputCompanyYears").val());
		formData.append("company_desc", $("#inputCompanyDesc").val());
		api.post('handle_exp', formData);
	});

	$('.btn-submit-projects').on('click', function () {
		if(myDropzone.files.length === 0){
			toastr.error("Please input all of the fields", "Incomplete fields");
		} else {
			var formData = new FormData();
			formData.append("project_name", $("#inputProjectName").val());
			formData.append("project_role", $("#inputRole").val());
			formData.append("project_tech", $("#inputTechnologies").val());
			formData.append("project_desc", $("#inputProjectDescription").val());

			$.ajax({
			url: orig_base_url + 'handle_projects',
			method: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			success: function(res){
				let response = JSON.parse(res);
				let new_id = response.new_id; 
				let origin = 'projects';
			
				myDropzone.options.params = { foreign_id: new_id, origin: origin };
				myDropzone.processQueue();
			}
			});
		}
	});

	
});
