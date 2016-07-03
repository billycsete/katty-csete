<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta author="William Csete">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $page->page_title()->html() ?></title>
	<meta name="description" content="<?php echo $page->description()->kirbytext() ?>">
	<meta name="keywords" content="<?php echo $page->keywords()->html() ?>">
	<?php echo css('assets/css/steeze-min.css') ?>
	<script src="https://use.typekit.net/gbt2jbb.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js" type="text/javascript"></script>
</head>
<body>

	<div id="sidebar" class="sidebar">
		<div class="sidebar-profile">
			<figure class="sidebar-profile-img fluid"><img src="assets/images/profile.jpg" alt="" /></figure>
			<div class="sidebar-details">
				<ul>
					<li class="sidebar-profile-link"><strong>Kathryn Csete</strong></li>
					<li><a class="sidebar-profile-link" href="mailto:kcsete2@gmail.com"><i class="icon-mail"></i> kcsete2@gmail.com</a></li>
				</ul>
			</div>
		</div>
		<nav class="sidebar-nav">
			<ul>
				<li><a class="sidebar-link" href="#education"><i class="icon icon-graduation-cap"></i> Education</a></li>
				<li><a class="sidebar-link" href="#work"><i class="icon icon-briefcase"></i> Work Experience</a></li>
				<li><a class="sidebar-link" href="#certifications"><i class="icon icon-doc-text-inv"></i> Certifications &amp; Memberships</a></li>
				<li><a class="sidebar-link" href="#volunteering"><i class="icon icon-users"></i> Volunteering</a></li>
				<li><a class="sidebar-link" href="#goals"><i class="icon icon-award"></i> Goals</a></li>
				<li><a class="sidebar-link" href="#skills"><i class="icon icon-tools"></i> Skills</a></li>
			</ul>
		</nav>
	</div><!--/sidebar-->

	<div class="content">
		<?php foreach($pages->visible() as $section) {
			snippet($section->uid(), array('data' => $section));
		} ?>
	</div><!--/content-->

	<?php echo js('assets/js/main.min.js') ?>
</body>
</html>

