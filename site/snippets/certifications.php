<section id="certifications" class="certifications section tan">
	<h2><span><?php echo $data->certifications_heading()->html() ?></span></h2>
	<?php foreach($data->children()->visible() as $certification): ?>
	<ul>
		<li><strong><?php echo $certification->cert_name()->html() ?></strong></li>
		<li><?php echo $certification->cert_org()->html() ?></li>
		<li><em><?php echo $certification->cert_date()->html() ?></em></li>
	</ul>
	<?php endforeach ?>
</section><!--/certifications-->
