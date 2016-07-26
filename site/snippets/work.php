<section id="work" class="work section">
	<h2><span><?php echo $data->work_heading()->html() ?></span></h2>
	<?php foreach($data->children()->visible() as $job): ?>
	<ul>
		<li class="stroke-above"><strong><?php echo $job->job_title()->html() ?></strong></li>
		<li><?php echo $job->workplace()->html() ?>, <?php echo $job->location()->html() ?></li>
		<li class="space-below"><em><?php echo $job->job_date()->html() ?></em></li>
		<li><?php echo $job->job_description()->kirbytext() ?></li>
	</ul>
	<?php endforeach ?>
</section><!--/work-->
