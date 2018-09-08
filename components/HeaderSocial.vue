<template>

	<div>

		<div class="header__contacts">

			<span class="header__contacts_prize">Как забрать приз</span>
			<span class="header__contacts_contact">Контакты</span>
			<div class="header__contacts_social_icons">
				<div class="social_icon vkontakte"></div>
				<div class="social_icon facebook"></div>
				<div class="social_icon twitter"></div>
				<div class="social_icon instagram"></div>
				<div class="social_icon odnoklass"></div>
			</div>
			<span class="header__contacts_phone">Телефон прямого эфира: <span class="header__contacts_phone_number">8 (495) 232 10 74</span></span>

		</div>

	</div>

</template>


<style scoped>

	.header__contacts {
		float: right;
		width: 270px;
		height: 90px;
		font-size: 12px;
		color: #7e7aa1;
	}


	.header__contacts_contact {
		float: right;
	}

	.header__contacts_social_icons {
		margin: 12px 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
	}

	.header__contacts_social_icons .social_icon:hover {
		transform: scale(1.15, 1.15);
	}

	.header__contacts_phone {
		font-size: 13px;
		color: #463d9f;
	}

	.header__contacts_phone_number {
		letter-spacing: -0.5px;
		font-weight: bold;
		letter-spacing: -0.3px;
	}

</style>