import { csvResponse } from '$lib/server/csv-source';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () =>
	csvResponse(['data_DRI', 'Constant_yearlyDRI15to22.csv'], 'VN-DRAW_DRI_2015-2022.csv');
