import type {
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	INodeExecutionData,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class MsnConnector implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MSN Connector Trigger',
		name: 'msnConnector',
		icon: { light: 'file:msnconnector.svg', dark: 'file:msnconnector.dark.svg' },
		group: ['trigger'],
		version: 1,
		description: 'Starts the workflow when a MSN Connector event occurs',
		defaults: {
			name: 'MSN Connector Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'msnConnectorApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'WhatsApp Inbound Message',
						value: 'whatsapp inbound message',
					},
					{
						name: 'WhatsApp Outbound Message',
						value: 'whatsapp outbound message',
					},
				],
				default: 'whatsapp inbound message',
				description: 'The event that triggers the workflow',
			},
		],
		usableAsTool: true,
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();
		const selectedEvent = this.getNodeParameter('event') as string;

		// Filter by event type if the payload contains it
		if (bodyData.event && bodyData.event !== selectedEvent) {
			return {};
		}

		// Structure return data for n8n
		const returnData: INodeExecutionData[] = [
			{
				json: bodyData,
			}
		];

		return {
			workflowData: [returnData],
		};
	}
}