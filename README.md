# n8n-nodes-waflow

This is an n8n community node. It lets you use [WaFloW.ai](https://waflow.ai) in your n8n workflows.

WaFloW is a platform for automating WhatsApp communications. This node provides a Trigger interface to start your workflows instantly when new WhatsApp events occur.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

1. Go to **Settings > Community Nodes**.
2. Select **Install**.
3. Enter `n8n-nodes-waflow`.

## Operations

### WaFloW Trigger
This node allows you to trigger workflows based on real-time events from WaFloW:

* **WhatsApp Inbound Message**: Triggers when a new message is received from a user.
* **WhatsApp Outbound Message**: Triggers when a message is sent to a user.

## Credentials

You can use these credentials to authenticate with the WaFloW API.

### WaFloW.ai API
To configure the node, you will need the following information from your WaFloW account:

1. **API Key**: Your personal authentication key.
2. **Subaccount ID**: The identifier for the specific subaccount you want to listen to.

*Note: The node handles authentication automatically using these credentials.*

## Compatibility

* Tested with n8n version 1.0.0+
* Requires a valid WaFloW.ai account and subscription.

## Usage

1. Add the **WaFloW Trigger** node to your canvas.
2. Select or create your **WaFloW.ai API** credentials.
3. Choose the **Event** you want to listen for (e.g., `WhatsApp Inbound Message`).
4. Execute the node (or activate the workflow) to start receiving real-time data from WhatsApp.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [WaFloW.ai Website](https://waflow.ai)

## License

[MIT](LICENSE.md)