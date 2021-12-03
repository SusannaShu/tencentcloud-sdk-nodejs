import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateApmInstanceResponse, CreateApmInstanceRequest, DescribeApmAgentResponse, DescribeApmInstancesResponse, DescribeApmInstancesRequest, DescribeApmAgentRequest } from "./apm_models";
/**
 * apm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 业务购买APM实例，调用该接口创建
     */
    CreateApmInstance(req: CreateApmInstanceRequest, cb?: (error: string, rep: CreateApmInstanceResponse) => void): Promise<CreateApmInstanceResponse>;
    /**
     * APM实例列表拉取
     */
    DescribeApmInstances(req: DescribeApmInstancesRequest, cb?: (error: string, rep: DescribeApmInstancesResponse) => void): Promise<DescribeApmInstancesResponse>;
    /**
     * 获取Apm Agent信息
     */
    DescribeApmAgent(req: DescribeApmAgentRequest, cb?: (error: string, rep: DescribeApmAgentResponse) => void): Promise<DescribeApmAgentResponse>;
}
