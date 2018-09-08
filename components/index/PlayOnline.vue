<template>

	<div>

		<section class="section play_online">

			<div class="play_online__head">
				<h3 class="head_text">Слушать онлайн</h3>
			</div>

			<div class="play_online__content">
				<div class="play_online__item ">
					<div class="play_online__item_img a rounded">
						<img src="~/assets/img/play_online__item_a.png" alt="play_online__item_a.png">
					</div>
					<div class="play_online__item_name">Хит FM</div>
				</div>
				<div class="play_online__item ">
					<div class="play_online__item_img b rounded"></div>
					<div class="play_online__item_name">Большая 20-ка</div>
				</div>
				<div class="play_online__item ">
					<div class="play_online__item_img c rounded"></div>
					<div class="play_online__item_name">Dance</div>
				</div>
				<div class="play_online__item ">
					<div class="play_online__item_img d rounded"></div>
					<div class="play_online__item_name">ХИТ FM 2000-е</div>
				</div>
				<div class="play_online__item ">
					<div class="play_online__item_img e rounded"></div>
					<div class="play_online__item_name">ХИТ FM 90-е</div>
				</div>
				<div class="play_online__item ">
					<div class="play_online__item_img f rounded">
						<div class="playing_online rounded">
							<i class="material-icons">pause</i>
						</div>
					</div>
					<div class="play_online__item_name">Urban</div>
				</div>
				<div class="play_online__item ">
					<div class="play_online__item_img g rounded"></div>
					<div class="play_online__item_name">Хит FM Soft</div>
				</div>
			</div>

		</section>

	</div>

</template>


<style>

	.play_online {
		clear: both;
	}

	.play_online__content {
		justify-content: space-between;
		display: flex;
	}

	.play_online__item {
		flex: 0 0 160px;
		text-align: center;
	}

	.play_online__item_img {
		width: 160px;
		height: 160px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 25px 23px -10px #bab8cc;
		margin: 0 0 30px 0;
		cursor: pointer;
	}

	.playing_online {
		background: linear-gradient(0deg, rgba(136, 17, 225, 0.7), rgba(235, 16, 115, 0.8));
		width: 100%;
		height: 100%;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.playing_online i {
		font-size: 40px;
	}

	.play_online__item_img.a {
		/*background: url('~/assets/img/play_online__item_a.png') no-repeat center;*/
	}

	.play_online__item_img.b {
		background: url('~/assets/img/play_online__item_b.png') no-repeat center;
	}

	.play_online__item_img.c {
		background: url('~/assets/img/play_online__item_c.png') no-repeat center;
	}

	.play_online__item_img.d {
		background: url('~/assets/img/play_online__item_d.png') no-repeat center;
	}

	.play_online__item_img.e {
		background: url('~/assets/img/play_online__item_e.png') no-repeat center;
	}

	.play_online__item_img.f {
		background: url('~/assets/img/play_online__item_f.png') no-repeat center;
	}

	.play_online__item_img.g {
		background: url('~/assets/img/play_online__item_g.png') no-repeat center;
	}

	.play_online__item_name {
		font-weight: bold;
		color: #19106a;
		margin: 0 0 5px 0;
	}

</style>