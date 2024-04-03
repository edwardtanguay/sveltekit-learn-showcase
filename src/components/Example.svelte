<script lang="ts">
	export let title = 'nnn'
</script>

<fieldset
	class="border border-[#00505783] mt-5 rounded w-fit px-5 pb-3 pt-2 h-fit flex flex-col justify-center shadow-md shadow-gray-500"
>
	<legend class="font-mono text-[#005057ab]"
		>{title}</legend
	>
	<slot />
</fieldset>
