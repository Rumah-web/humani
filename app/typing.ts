export type Decimal = number | string;

export interface IData {
	prefix: null | string;
	title: string;
	description: string;
	imagePath: null | string;
}

export interface IMenu {
	description: string;
	m_menu_category_id: number;
	m_menu_files: any;
	name: string;
}

export interface m_files {
	id?: number;
	path?: string;
	uuid?: string;
	[key: string]: any;
}

export interface m_item {
	id?: number;
	uuid?: string;
	name?: string;
	status?: string;
	description?: string;
	[key: string]: any;
}

export interface m_menu {
	id: number;
	uuid: string;
	name: string;
	description: string;
	price: Decimal;
	price_promo: Decimal;
	status: string;
	m_menu_category_id: number;
	min_qty: number;
	max_qty: number;
	[key: string]: any;
}

export interface m_menu_category {
	id: number;
	name: string;
	slug: string;
	cover: string;
	description: string;
	[key: string]: any;
}

export interface m_menu_files {
	id: number;
	m_menu_id: number;
	m_files_id: number;
	m_files: m_files;
	[key: string]: any;
}

export interface m_menu_item {
	id?: number;
	m_menu_id?: number;
	m_item_id?: number;
	order?: number;
	status?: string;
	m_item?: m_item;
	[key: string]: any;
}

export interface customer {
	id?: number;
	name?: string;
	email?: string;
	phone?: string;
	address?: string;
	[key: string]: any;
}

export interface invoice {
	id?: number;
	uuid?: string;
	invoice_number?: string;
	created_at?: string | Date;
	total?: Decimal;
	status?: string;
	[key: string]: any;
}

export interface order {
	id?: number;
	uuid?: string;
	order_number?: string;
	created_at?: string | Date;
	total?: Decimal;
	customer?: customer;
	[key: string]: any;
}

export interface order_detail {
	id?: number;
	order_id?: number;
	menu_id?: number;
	qty?: number;
	price?: Decimal;
	[key: string]: any;
}

export interface order_detail_menu_item {
	id?: number;
	order_detail_id?: number;
	item_id?: number;
	[key: string]: any;
}

export interface IPriceMenu {
	id: number;
	name: string;
	slug: string;
	categories: {
		id: number;
		name: string;
		slug: string;
		cover: string;
		description: string;
		menus: {
			id: number;
			uuid: string;
			name: string;
			description: string;
			price: Decimal;
			price_promo: Decimal;
			status: string;
			m_menu_category_id: number;
			min_qty: number;
			max_qty: number;
			m_menu_files: {
				id: number;
				m_menu_id: number;
				m_files_id: number;
				m_files: {
					path: string;
					uuid: string;
				};
			}[];
			m_menu_item: {
				id: number;
				m_menu_id: number;
				m_item_id: number;
				order: number;
				status: string;
				m_item: {
					id: number;
					uuid: string;
					name: string;
					status: string;
					description: string;
				};
			}[];
		}[];
	}[];
}
