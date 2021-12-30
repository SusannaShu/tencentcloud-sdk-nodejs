/**
 * 关系策略权限
 */
export interface OrgPermission {
    /**
      * 权限Id
      */
    Id: number;
    /**
      * 权限名
      */
    Name: string;
}
/**
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
    /**
      * 企业组织ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgId: number;
    /**
      * 创建者UIN
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostUin: number;
    /**
      * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NickName: string;
    /**
      * 企业组织类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgType: number;
    /**
      * 组织管理员：true，组织成员：false
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsManager: boolean;
    /**
      * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPolicyType: string;
    /**
      * 策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPolicyName: string;
    /**
      * 策略权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPermission: Array<OrgPermission>;
    /**
      * 根节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RootNodeId: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 成员加入时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    JoinTime: string;
    /**
      * 是否允许退出。允许：Allow，不允许：Denied。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAllowQuit: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindOrganizationMemberAuthAccount请求参数结构体
 */
export interface BindOrganizationMemberAuthAccountRequest {
    /**
      * 成员Uin。
      */
    MemberUin: number;
    /**
      * 策略ID。
      */
    PolicyId: number;
    /**
      * 组织子账号Uin。
      */
    OrgSubAccountUins: Array<number>;
}
/**
 * CreateOrganizationMember请求参数结构体
 */
export interface CreateOrganizationMemberRequest {
    /**
      * 名称
      */
    Name: string;
    /**
      * 关系策略
      */
    PolicyType: string;
    /**
      * 关系权限
      */
    PermissionIds: Array<number>;
    /**
      * 需要调节的节点
      */
    NodeId: number;
    /**
      * 账号名
      */
    AccountName: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 重试创建传记录ID
      */
    RecordId?: number;
}
/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 */
export interface BindOrganizationMemberAuthAccountResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeOrganizationMembers请求参数结构体
 */
export interface DescribeOrganizationMembersRequest {
    /**
      * 偏移量
      */
    Offset: number;
    /**
      * 限制数目
      */
    Limit: number;
    /**
      * 国际站：en，国内站：zh
      */
    Lang?: string;
    /**
      * 成员名或者成员ID搜索
      */
    SearchKey?: string;
}
/**
 * 企业组织成员
 */
export interface OrgMember {
    /**
      * 成员Uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemberUin: number;
    /**
      * 成员名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 成员类型，邀请：Invite， 创建：Create
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemberType: string;
    /**
      * 关系策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPolicyType: string;
    /**
      * 关系策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPolicyName: string;
    /**
      * 关系策略权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPermission: Array<OrgPermission>;
    /**
      * 所属节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeId: number;
    /**
      * 所属节点名
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeName: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 是否允许成员退出。允许：Allow，不允许：Denied。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAllowQuit: string;
}
/**
 * DescribeOrganization请求参数结构体
 */
export interface DescribeOrganizationRequest {
    /**
      * 国际站：en，国内站：zh
      */
    Lang?: string;
}
/**
 * DescribeOrganizationMembers返回参数结构体
 */
export interface DescribeOrganizationMembersResponse {
    /**
      * 成员列表
      */
    Items: Array<OrgMember>;
    /**
      * 总数目
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateOrganizationMember返回参数结构体
 */
export interface CreateOrganizationMemberResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
