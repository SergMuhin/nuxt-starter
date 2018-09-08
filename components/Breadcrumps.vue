<template>

	<div>

		<div class="header__breadcrumps">
			<router-link to="/">
				<span>Главная</span>
			</router-link>
			-
			<span>
				<slot/>
			</span>
		</div>

	</div>

</template>


<style scoped>

	.header__breadcrumps {
		margin: 10px 0 30px 0;
		font-size: 12px;
		color:#7e7aa1;
		letter-spacing: 0.26px;
	}

</style>