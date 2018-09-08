<template>

	<div>

		<div class="additional_content">

			<div class="chip__wrapper">
				<nuxt-link to="/on-air/dj">
					<div class="chip type_chip ">Ведущие</div>
				</nuxt-link>
				<nuxt-link to="/on-air/programs/">
					<div class="chip type_chip active_chip">Программы</div>
				</nuxt-link>
				<nuxt-link to="/on-air/timing">
					<div class="chip type_chip ">Расписание</div>
				</nuxt-link>
			</div>

			<div class="back_button__wrapper" @click="$router.go(-1)">
				<div class="back_button__icon">
					<i class="material-icons">navigate_before</i>
				</div>
				<div class="back_button__str">Назад</div>
			</div>

		</div>

	</div>

</template>
