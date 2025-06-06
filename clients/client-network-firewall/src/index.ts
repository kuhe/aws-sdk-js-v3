// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This is the API Reference for Network Firewall. This guide is for developers who need
 *          detailed information about the Network Firewall API actions, data types, and errors. </p>
 *          <p>The REST API requires you to handle connection details, such as calculating
 *                signatures, handling request retries, and error handling. For general information
 *                about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p>
 *          <p>To view the complete list of Amazon Web Services Regions where Network Firewall is available, see
 *          <a href="https://docs.aws.amazon.com/general/latest/gr/network-firewall.html">Service
 *             endpoints and quotas</a> in the <i>Amazon Web Services General
 *                Reference</i>.
 *       </p>
 *          <p>To access Network Firewall using the IPv4 REST API endpoint:
 *                   <code>https://network-firewall.<region>.amazonaws.com </code>
 *          </p>
 *          <p>To access Network Firewall using the Dualstack (IPv4 and IPv6) REST API endpoint:
 *                <code>https://network-firewall.<region>.aws.api </code>
 *          </p>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to
 *                the programming language or platform that you're using. For more information, see
 *                <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>For descriptions of Network Firewall features, including and step-by-step
 *                instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
 *                   Guide</a>.</p>
 *          <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
 *          prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
 *          perimeter of your VPC. This includes filtering traffic going to and coming from an internet
 *          gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible
 *       with Suricata, a free, open source network analysis and threat detection engine.
 *       Network Firewall supports Suricata version 7.0.3. For information about Suricata,
 *           see the <a href="https://suricata.io/">Suricata website</a> and the
 *           <a href="https://suricata.readthedocs.io/en/suricata-7.0.3/">Suricata User Guide</a>. </p>
 *          <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
 *          The following are just a few examples: </p>
 *          <ul>
 *             <li>
 *                <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and
 *                block all other forms of traffic.</p>
 *             </li>
 *             <li>
 *                <p>Use custom lists of known bad domains to limit the types of domain names that your
 *                applications can access.</p>
 *             </li>
 *             <li>
 *                <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p>
 *             </li>
 *             <li>
 *                <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the
 *                port used.</p>
 *             </li>
 *          </ul>
 *          <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in
 *          Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p>
 *          <p>To start using Network Firewall, do the following: </p>
 *          <ol>
 *             <li>
 *                <p>(Optional) If you don't already have a VPC that you want to protect, create it in
 *                Amazon VPC. </p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a
 *                subnet for the sole use of Network Firewall. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, define the firewall behavior as follows: </p>
 *                <ol>
 *                   <li>
 *                      <p>Create stateless and stateful rule groups,
 *                  to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
 *                   </li>
 *                   <li>
 *                      <p>Create a firewall policy that uses your rule groups and
 *                      specifies additional default traffic filtering behavior. </p>
 *                   </li>
 *                </ol>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create a firewall and specify your new firewall policy and
 *                  VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you
 *                specify, with the behavior that's defined in the firewall policy.</p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall
 *                endpoints.</p>
 *             </li>
 *          </ol>
 *          <p>After your firewall is established, you can add firewall endpoints for new Availability Zones by following the prior steps for the Amazon VPC setup and
 *       firewall subnet definitions. You can also add endpoints to Availability Zones that you're using in the firewall, either for the same VPC
 *           or for another VPC, by following the prior steps for the Amazon VPC setup, and defining the new VPC subnets as VPC endpoint associations. </p>
 *
 * @packageDocumentation
 */
export * from "./NetworkFirewallClient";
export * from "./NetworkFirewall";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { NetworkFirewallExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { NetworkFirewallServiceException } from "./models/NetworkFirewallServiceException";
