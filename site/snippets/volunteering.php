<section id="volunteering" class="volunteering section">
	<h2><span><?php echo $data->volunteering_heading()->html() ?></span></h2>
	<?php foreach($data->children()->visible() as $volunteer): ?>
	<ul>
		<li class="stroke-above"><strong><?php echo $volunteer->event_name()->html() ?></strong></li>
		<li class="space-below"><em><?php echo $volunteer->event_date()->html() ?></em></li>
		<li><?php echo $volunteer->event_description()->kirbytext() ?></li>
	</ul>
	<?php endforeach ?>
</section><!--/volunteering-->
