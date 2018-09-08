<template>

	<div>

		<section class="section guests">

			<div class="guests__head">
				<h3 class="head_text">Гости Хит FM</h3>
			</div>

			<div class="guests__content">

				<div class="guests__content_box rounded">
					<div class="guests__item_img a"></div>
					<div class="guests__item_name">Doni</div>
					<div class="guests__item_date">12.14.1992</div>
				</div>

				<div class="guests__content_box rounded">
					<div class="guests__item_img b"></div>
					<div class="guests__item_name">Doni</div>
					<div class="guests__item_date">12.14.1992</div>
				</div>

				<div class="guests__content_box rounded">
					<div class="guests__item_img c"></div>
					<div class="guests__item_name">Doni</div>
					<div class="guests__item_date">12.14.1992</div>
				</div>

			</div>

		</section>

	</div>

</template>


<style scoped>

	.guests {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.guests__content {
		display: flex;
		justify-content: space-between;
	}

	.guests__content_box {
		padding: 18px;
		width: 296px;
		height: 270px;
		background: white;
	}

	.guests__item_img {
		margin: 0 0 20px 0;
		width: 262px;
		height: 178px;
		cursor: pointer;
	}

	.guests__item_name {
		font-weight: bold;
		color: #19106a;
		margin: 0 0 5px 0;
	}

	.guests__item_img.a {
		background: url('~/assets/img/guest_1.png') no-repeat center;
	}

	.guests__item_img.b {
		background: url('~/assets/img/guest_2.png') no-repeat center;
	}

	.guests__item_img.c {
		background: url('~/assets/img/guest_3.png') no-repeat center;
	}

	.guests__item_date {
		font-size: 14px;
		color: #7e7aa1;
	}

</style>