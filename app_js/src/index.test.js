/* eslint-disable */
import { describe, it, expect, test } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import App from './routes/+page.svelte';

import axios from 'axios';
import moment from 'moment-timezone';

describe('Hello.svelte', () => {
	// TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach

	it('renders', () => {
		const { container } = render(App);
		expect(container).toBeTruthy();
	});

	it('mounts', async () => {
		const { container } = render(App);
		expect(container).toBeTruthy();
		const response = await axios.get('http://worldtimeapi.org/api/timezone/Europe/Moscow');
		const currentMoscowTime = moment(response.data.datetime).format('HH:mm');
		console.log('container.innerHTML', container.innerHTML);
		expect(container.innerHTML).toContain(moment().utc().tz('Europe/Moscow').format('HH:mm'));
	});
});
/* eslint-enable */
