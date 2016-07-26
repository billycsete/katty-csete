<section id="education" class="education section tan">
	<h2><span><?php echo $data->education_heading()->html() ?></span></h2>
	<?php foreach($data->children()->visible() as $school): ?>
	<ul>
		<li><strong><?php echo $school->degree()->html() ?></strong></li>
		<li><?php echo $school->school()->html() ?></li>
		<li><?php echo $school->location()->html() ?></li>
		<li><em><?php echo $school->graduation()->html() ?></em></li>
	</ul>
	<?php endforeach ?>
</section><!--/education-->
