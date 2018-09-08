<template>
	<div>
		<footer id="footer">

			<div class="footer__social">
				<div class="footer__social_logo">
				<nuxt-link to="/">
					<img class="header__menu_logo" src="~assets/img/logo.png" alt="hitfm_logo">
				</nuxt-link>
				</div>
				<div class="footer__social_icons">
					<div class="footer__social_call">Мы здесь!</div>
					<div class="social_icon vkontakte"></div>
					<div class="social_icon facebook"></div>
					<div class="social_icon twitter"></div>
					<div class="social_icon instagram"></div>
					<div class="social_icon odnoklass"></div>
				</div>
			</div>

			<div class="footer__hr"></div>

			<div class="footer__menu">
				<div class="footer__menu_item">О Хит FM</div>
				<div class="footer__menu_item">Города вещания</div>
				<div class="footer__menu_item">Реклама</div>
				<div class="footer__menu_item">Партнёрам</div>
				<div class="footer__menu_item">Контакты</div>
			</div>

			<div class="footer__partners">
				<div class="footer__partners_item a"></div>
				<div class="footer__partners_item b"></div>
				<div class="footer__partners_item c"></div>
				<div class="footer__partners_item d"></div>
				<div class="footer__partners_item e"></div>
				<div class="footer__partners_item f"></div>
				<div class="footer__partners_item g"></div>
			</div>

		</footer>

		<div class="footer__contacts">

			<div class="footer__contacts_rights">&#169; Все права защищены. HIT-FM </div>

			<div class="footer__contacts_mail">
				<span class="footer__contacts_icon email"></span>
				rmgsupport@gmail.com
			</div>

			<div class="footer__contacts_address">
				<span class="footer__contacts_icon address"></span>
				123298, 3-я Хорошевская ул., д. 12
			</div>

			<div class="footer__contacts_phone">
				<span class="footer__contacts_icon phone"></span>
				8 (499) 579 77 09
			</div>

		</div>
	</div>
</template>


<style>

	#footer {
		padding: 30px 98px;
		background: #463d9f;
		color: white;
		clear: both;
	}

	.footer__social {
		margin: 0px auto  30px auto;
		width: 500px;
		display: flex;
		justify-content: space-between;
	}

	.footer__social_logo {
		margin: 0 39px 0 0;
	}

	.footer__social_call {
		flex: 1 1 100%;
	}

	.footer__social_icons {
		flex: 0 0 260px;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		transition: all 0.1s ease-in;
	}

	.footer__hr {
		margin: 0 0 30px 0;
		height: 2px;
		background: url('~/assets/img/footer__hr.png') no-repeat center;
	}

	.footer__menu {
		margin: 0 0 30px 0;
		display: flex;
		justify-content: space-between;
	}

	.footer__menu_item {
		cursor: pointer;
	}

	.footer__partners {
		margin: 0 0 30px 0;
		display: flex;
		justify-content: space-between;
	}

	.footer__partners_item {
		height: 40px;
		opacity: 0.3;
		cursor: pointer;
	}

	.footer__partners_item:hover {
		opacity: 1;
	}

	.footer__partners_item.a {
		width: 73px;
		background: url('~/assets/img/partner_icon_a.png') no-repeat;
	}

	.footer__partners_item.b {
		width: 66px;
		background: url('~/assets/img/partner_icon_b.png') no-repeat center;
	}

	.footer__partners_item.c {
		width: 61px;
		background: url('~/assets/img/partner_icon_c.png') no-repeat center;
	}

	.footer__partners_item.d {
		width: 54px;
		background: url('~/assets/img/partner_icon_d.png') no-repeat center;
	}

	.footer__partners_item.e {
		width: 86px;
		background: url('~/assets/img/partner_icon_e.png') no-repeat center;
	}

	.footer__partners_item.f {
		width: 71px;
		background: url('~/assets/img/partner_icon_f.png') no-repeat center;
	}

	.footer__partners_item.g {
		width: 111px;
		background: url('~/assets/img/partner_icon_g.png') no-repeat center;
	}

	.footer__contacts {
		margin: -30px 0;
		padding: 31px 98px;
		color: white;
		background: #26188e;
		display: flex;
		font-size: 14px;
		justify-content: space-between;
	}

	.footer__contacts_rights {
		font-size: 12px;
		flex: 0 0 320px;
	}

	.footer__contacts_mail {

	}

	.footer__contacts_address {
		display: flex;
	}

	.footer__contacts_phone {

	}

	.footer__contacts_icon {
		margin: 0 15px 0 0;
		display: inline-block;
		width: 13px;
		height: 13px;
	}

	.footer__contacts_icon.email {
		width: 17px;
		background: url('~/assets/img/footer__sms_icon.png') no-repeat center;
	}

	.footer__contacts_icon.address {
		background: url('~/assets/img/footer__geo_icon.png') no-repeat center;
		height: 18px;
	}

	.footer__contacts_icon.phone {
		margin: 0 10px 0 0;
		background: url('~/assets/img/footer__phone_icon.png') no-repeat center;
	}

	.footer__social_icons .social_icon:hover  {
		transform: scale(1.15, 1.15);
	}

</style>
