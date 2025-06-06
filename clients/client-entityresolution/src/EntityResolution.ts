// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddPolicyStatementCommand,
  AddPolicyStatementCommandInput,
  AddPolicyStatementCommandOutput,
} from "./commands/AddPolicyStatementCommand";
import {
  BatchDeleteUniqueIdCommand,
  BatchDeleteUniqueIdCommandInput,
  BatchDeleteUniqueIdCommandOutput,
} from "./commands/BatchDeleteUniqueIdCommand";
import {
  CreateIdMappingWorkflowCommand,
  CreateIdMappingWorkflowCommandInput,
  CreateIdMappingWorkflowCommandOutput,
} from "./commands/CreateIdMappingWorkflowCommand";
import {
  CreateIdNamespaceCommand,
  CreateIdNamespaceCommandInput,
  CreateIdNamespaceCommandOutput,
} from "./commands/CreateIdNamespaceCommand";
import {
  CreateMatchingWorkflowCommand,
  CreateMatchingWorkflowCommandInput,
  CreateMatchingWorkflowCommandOutput,
} from "./commands/CreateMatchingWorkflowCommand";
import {
  CreateSchemaMappingCommand,
  CreateSchemaMappingCommandInput,
  CreateSchemaMappingCommandOutput,
} from "./commands/CreateSchemaMappingCommand";
import {
  DeleteIdMappingWorkflowCommand,
  DeleteIdMappingWorkflowCommandInput,
  DeleteIdMappingWorkflowCommandOutput,
} from "./commands/DeleteIdMappingWorkflowCommand";
import {
  DeleteIdNamespaceCommand,
  DeleteIdNamespaceCommandInput,
  DeleteIdNamespaceCommandOutput,
} from "./commands/DeleteIdNamespaceCommand";
import {
  DeleteMatchingWorkflowCommand,
  DeleteMatchingWorkflowCommandInput,
  DeleteMatchingWorkflowCommandOutput,
} from "./commands/DeleteMatchingWorkflowCommand";
import {
  DeletePolicyStatementCommand,
  DeletePolicyStatementCommandInput,
  DeletePolicyStatementCommandOutput,
} from "./commands/DeletePolicyStatementCommand";
import {
  DeleteSchemaMappingCommand,
  DeleteSchemaMappingCommandInput,
  DeleteSchemaMappingCommandOutput,
} from "./commands/DeleteSchemaMappingCommand";
import {
  GenerateMatchIdCommand,
  GenerateMatchIdCommandInput,
  GenerateMatchIdCommandOutput,
} from "./commands/GenerateMatchIdCommand";
import {
  GetIdMappingJobCommand,
  GetIdMappingJobCommandInput,
  GetIdMappingJobCommandOutput,
} from "./commands/GetIdMappingJobCommand";
import {
  GetIdMappingWorkflowCommand,
  GetIdMappingWorkflowCommandInput,
  GetIdMappingWorkflowCommandOutput,
} from "./commands/GetIdMappingWorkflowCommand";
import {
  GetIdNamespaceCommand,
  GetIdNamespaceCommandInput,
  GetIdNamespaceCommandOutput,
} from "./commands/GetIdNamespaceCommand";
import { GetMatchIdCommand, GetMatchIdCommandInput, GetMatchIdCommandOutput } from "./commands/GetMatchIdCommand";
import {
  GetMatchingJobCommand,
  GetMatchingJobCommandInput,
  GetMatchingJobCommandOutput,
} from "./commands/GetMatchingJobCommand";
import {
  GetMatchingWorkflowCommand,
  GetMatchingWorkflowCommandInput,
  GetMatchingWorkflowCommandOutput,
} from "./commands/GetMatchingWorkflowCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetProviderServiceCommand,
  GetProviderServiceCommandInput,
  GetProviderServiceCommandOutput,
} from "./commands/GetProviderServiceCommand";
import {
  GetSchemaMappingCommand,
  GetSchemaMappingCommandInput,
  GetSchemaMappingCommandOutput,
} from "./commands/GetSchemaMappingCommand";
import {
  ListIdMappingJobsCommand,
  ListIdMappingJobsCommandInput,
  ListIdMappingJobsCommandOutput,
} from "./commands/ListIdMappingJobsCommand";
import {
  ListIdMappingWorkflowsCommand,
  ListIdMappingWorkflowsCommandInput,
  ListIdMappingWorkflowsCommandOutput,
} from "./commands/ListIdMappingWorkflowsCommand";
import {
  ListIdNamespacesCommand,
  ListIdNamespacesCommandInput,
  ListIdNamespacesCommandOutput,
} from "./commands/ListIdNamespacesCommand";
import {
  ListMatchingJobsCommand,
  ListMatchingJobsCommandInput,
  ListMatchingJobsCommandOutput,
} from "./commands/ListMatchingJobsCommand";
import {
  ListMatchingWorkflowsCommand,
  ListMatchingWorkflowsCommandInput,
  ListMatchingWorkflowsCommandOutput,
} from "./commands/ListMatchingWorkflowsCommand";
import {
  ListProviderServicesCommand,
  ListProviderServicesCommandInput,
  ListProviderServicesCommandOutput,
} from "./commands/ListProviderServicesCommand";
import {
  ListSchemaMappingsCommand,
  ListSchemaMappingsCommandInput,
  ListSchemaMappingsCommandOutput,
} from "./commands/ListSchemaMappingsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutPolicyCommand, PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import {
  StartIdMappingJobCommand,
  StartIdMappingJobCommandInput,
  StartIdMappingJobCommandOutput,
} from "./commands/StartIdMappingJobCommand";
import {
  StartMatchingJobCommand,
  StartMatchingJobCommandInput,
  StartMatchingJobCommandOutput,
} from "./commands/StartMatchingJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIdMappingWorkflowCommand,
  UpdateIdMappingWorkflowCommandInput,
  UpdateIdMappingWorkflowCommandOutput,
} from "./commands/UpdateIdMappingWorkflowCommand";
import {
  UpdateIdNamespaceCommand,
  UpdateIdNamespaceCommandInput,
  UpdateIdNamespaceCommandOutput,
} from "./commands/UpdateIdNamespaceCommand";
import {
  UpdateMatchingWorkflowCommand,
  UpdateMatchingWorkflowCommandInput,
  UpdateMatchingWorkflowCommandOutput,
} from "./commands/UpdateMatchingWorkflowCommand";
import {
  UpdateSchemaMappingCommand,
  UpdateSchemaMappingCommandInput,
  UpdateSchemaMappingCommandOutput,
} from "./commands/UpdateSchemaMappingCommand";
import { EntityResolutionClient, EntityResolutionClientConfig } from "./EntityResolutionClient";

const commands = {
  AddPolicyStatementCommand,
  BatchDeleteUniqueIdCommand,
  CreateIdMappingWorkflowCommand,
  CreateIdNamespaceCommand,
  CreateMatchingWorkflowCommand,
  CreateSchemaMappingCommand,
  DeleteIdMappingWorkflowCommand,
  DeleteIdNamespaceCommand,
  DeleteMatchingWorkflowCommand,
  DeletePolicyStatementCommand,
  DeleteSchemaMappingCommand,
  GenerateMatchIdCommand,
  GetIdMappingJobCommand,
  GetIdMappingWorkflowCommand,
  GetIdNamespaceCommand,
  GetMatchIdCommand,
  GetMatchingJobCommand,
  GetMatchingWorkflowCommand,
  GetPolicyCommand,
  GetProviderServiceCommand,
  GetSchemaMappingCommand,
  ListIdMappingJobsCommand,
  ListIdMappingWorkflowsCommand,
  ListIdNamespacesCommand,
  ListMatchingJobsCommand,
  ListMatchingWorkflowsCommand,
  ListProviderServicesCommand,
  ListSchemaMappingsCommand,
  ListTagsForResourceCommand,
  PutPolicyCommand,
  StartIdMappingJobCommand,
  StartMatchingJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIdMappingWorkflowCommand,
  UpdateIdNamespaceCommand,
  UpdateMatchingWorkflowCommand,
  UpdateSchemaMappingCommand,
};

export interface EntityResolution {
  /**
   * @see {@link AddPolicyStatementCommand}
   */
  addPolicyStatement(
    args: AddPolicyStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddPolicyStatementCommandOutput>;
  addPolicyStatement(
    args: AddPolicyStatementCommandInput,
    cb: (err: any, data?: AddPolicyStatementCommandOutput) => void
  ): void;
  addPolicyStatement(
    args: AddPolicyStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPolicyStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteUniqueIdCommand}
   */
  batchDeleteUniqueId(
    args: BatchDeleteUniqueIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteUniqueIdCommandOutput>;
  batchDeleteUniqueId(
    args: BatchDeleteUniqueIdCommandInput,
    cb: (err: any, data?: BatchDeleteUniqueIdCommandOutput) => void
  ): void;
  batchDeleteUniqueId(
    args: BatchDeleteUniqueIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteUniqueIdCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdMappingWorkflowCommand}
   */
  createIdMappingWorkflow(
    args: CreateIdMappingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdMappingWorkflowCommandOutput>;
  createIdMappingWorkflow(
    args: CreateIdMappingWorkflowCommandInput,
    cb: (err: any, data?: CreateIdMappingWorkflowCommandOutput) => void
  ): void;
  createIdMappingWorkflow(
    args: CreateIdMappingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdMappingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdNamespaceCommand}
   */
  createIdNamespace(
    args: CreateIdNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdNamespaceCommandOutput>;
  createIdNamespace(
    args: CreateIdNamespaceCommandInput,
    cb: (err: any, data?: CreateIdNamespaceCommandOutput) => void
  ): void;
  createIdNamespace(
    args: CreateIdNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMatchingWorkflowCommand}
   */
  createMatchingWorkflow(
    args: CreateMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMatchingWorkflowCommandOutput>;
  createMatchingWorkflow(
    args: CreateMatchingWorkflowCommandInput,
    cb: (err: any, data?: CreateMatchingWorkflowCommandOutput) => void
  ): void;
  createMatchingWorkflow(
    args: CreateMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaMappingCommand}
   */
  createSchemaMapping(
    args: CreateSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaMappingCommandOutput>;
  createSchemaMapping(
    args: CreateSchemaMappingCommandInput,
    cb: (err: any, data?: CreateSchemaMappingCommandOutput) => void
  ): void;
  createSchemaMapping(
    args: CreateSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdMappingWorkflowCommand}
   */
  deleteIdMappingWorkflow(
    args: DeleteIdMappingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdMappingWorkflowCommandOutput>;
  deleteIdMappingWorkflow(
    args: DeleteIdMappingWorkflowCommandInput,
    cb: (err: any, data?: DeleteIdMappingWorkflowCommandOutput) => void
  ): void;
  deleteIdMappingWorkflow(
    args: DeleteIdMappingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdMappingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdNamespaceCommand}
   */
  deleteIdNamespace(
    args: DeleteIdNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdNamespaceCommandOutput>;
  deleteIdNamespace(
    args: DeleteIdNamespaceCommandInput,
    cb: (err: any, data?: DeleteIdNamespaceCommandOutput) => void
  ): void;
  deleteIdNamespace(
    args: DeleteIdNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMatchingWorkflowCommand}
   */
  deleteMatchingWorkflow(
    args: DeleteMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMatchingWorkflowCommandOutput>;
  deleteMatchingWorkflow(
    args: DeleteMatchingWorkflowCommandInput,
    cb: (err: any, data?: DeleteMatchingWorkflowCommandOutput) => void
  ): void;
  deleteMatchingWorkflow(
    args: DeleteMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyStatementCommand}
   */
  deletePolicyStatement(
    args: DeletePolicyStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyStatementCommandOutput>;
  deletePolicyStatement(
    args: DeletePolicyStatementCommandInput,
    cb: (err: any, data?: DeletePolicyStatementCommandOutput) => void
  ): void;
  deletePolicyStatement(
    args: DeletePolicyStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaMappingCommand}
   */
  deleteSchemaMapping(
    args: DeleteSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaMappingCommandOutput>;
  deleteSchemaMapping(
    args: DeleteSchemaMappingCommandInput,
    cb: (err: any, data?: DeleteSchemaMappingCommandOutput) => void
  ): void;
  deleteSchemaMapping(
    args: DeleteSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMatchIdCommand}
   */
  generateMatchId(
    args: GenerateMatchIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateMatchIdCommandOutput>;
  generateMatchId(args: GenerateMatchIdCommandInput, cb: (err: any, data?: GenerateMatchIdCommandOutput) => void): void;
  generateMatchId(
    args: GenerateMatchIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMatchIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdMappingJobCommand}
   */
  getIdMappingJob(
    args: GetIdMappingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdMappingJobCommandOutput>;
  getIdMappingJob(args: GetIdMappingJobCommandInput, cb: (err: any, data?: GetIdMappingJobCommandOutput) => void): void;
  getIdMappingJob(
    args: GetIdMappingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdMappingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdMappingWorkflowCommand}
   */
  getIdMappingWorkflow(
    args: GetIdMappingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdMappingWorkflowCommandOutput>;
  getIdMappingWorkflow(
    args: GetIdMappingWorkflowCommandInput,
    cb: (err: any, data?: GetIdMappingWorkflowCommandOutput) => void
  ): void;
  getIdMappingWorkflow(
    args: GetIdMappingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdMappingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdNamespaceCommand}
   */
  getIdNamespace(
    args: GetIdNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdNamespaceCommandOutput>;
  getIdNamespace(args: GetIdNamespaceCommandInput, cb: (err: any, data?: GetIdNamespaceCommandOutput) => void): void;
  getIdNamespace(
    args: GetIdNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchIdCommand}
   */
  getMatchId(args: GetMatchIdCommandInput, options?: __HttpHandlerOptions): Promise<GetMatchIdCommandOutput>;
  getMatchId(args: GetMatchIdCommandInput, cb: (err: any, data?: GetMatchIdCommandOutput) => void): void;
  getMatchId(
    args: GetMatchIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchingJobCommand}
   */
  getMatchingJob(
    args: GetMatchingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMatchingJobCommandOutput>;
  getMatchingJob(args: GetMatchingJobCommandInput, cb: (err: any, data?: GetMatchingJobCommandOutput) => void): void;
  getMatchingJob(
    args: GetMatchingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchingWorkflowCommand}
   */
  getMatchingWorkflow(
    args: GetMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMatchingWorkflowCommandOutput>;
  getMatchingWorkflow(
    args: GetMatchingWorkflowCommandInput,
    cb: (err: any, data?: GetMatchingWorkflowCommandOutput) => void
  ): void;
  getMatchingWorkflow(
    args: GetMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProviderServiceCommand}
   */
  getProviderService(
    args: GetProviderServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProviderServiceCommandOutput>;
  getProviderService(
    args: GetProviderServiceCommandInput,
    cb: (err: any, data?: GetProviderServiceCommandOutput) => void
  ): void;
  getProviderService(
    args: GetProviderServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProviderServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaMappingCommand}
   */
  getSchemaMapping(
    args: GetSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaMappingCommandOutput>;
  getSchemaMapping(
    args: GetSchemaMappingCommandInput,
    cb: (err: any, data?: GetSchemaMappingCommandOutput) => void
  ): void;
  getSchemaMapping(
    args: GetSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdMappingJobsCommand}
   */
  listIdMappingJobs(
    args: ListIdMappingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdMappingJobsCommandOutput>;
  listIdMappingJobs(
    args: ListIdMappingJobsCommandInput,
    cb: (err: any, data?: ListIdMappingJobsCommandOutput) => void
  ): void;
  listIdMappingJobs(
    args: ListIdMappingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdMappingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdMappingWorkflowsCommand}
   */
  listIdMappingWorkflows(): Promise<ListIdMappingWorkflowsCommandOutput>;
  listIdMappingWorkflows(
    args: ListIdMappingWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdMappingWorkflowsCommandOutput>;
  listIdMappingWorkflows(
    args: ListIdMappingWorkflowsCommandInput,
    cb: (err: any, data?: ListIdMappingWorkflowsCommandOutput) => void
  ): void;
  listIdMappingWorkflows(
    args: ListIdMappingWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdMappingWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdNamespacesCommand}
   */
  listIdNamespaces(): Promise<ListIdNamespacesCommandOutput>;
  listIdNamespaces(
    args: ListIdNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdNamespacesCommandOutput>;
  listIdNamespaces(
    args: ListIdNamespacesCommandInput,
    cb: (err: any, data?: ListIdNamespacesCommandOutput) => void
  ): void;
  listIdNamespaces(
    args: ListIdNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMatchingJobsCommand}
   */
  listMatchingJobs(
    args: ListMatchingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMatchingJobsCommandOutput>;
  listMatchingJobs(
    args: ListMatchingJobsCommandInput,
    cb: (err: any, data?: ListMatchingJobsCommandOutput) => void
  ): void;
  listMatchingJobs(
    args: ListMatchingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMatchingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMatchingWorkflowsCommand}
   */
  listMatchingWorkflows(): Promise<ListMatchingWorkflowsCommandOutput>;
  listMatchingWorkflows(
    args: ListMatchingWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMatchingWorkflowsCommandOutput>;
  listMatchingWorkflows(
    args: ListMatchingWorkflowsCommandInput,
    cb: (err: any, data?: ListMatchingWorkflowsCommandOutput) => void
  ): void;
  listMatchingWorkflows(
    args: ListMatchingWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMatchingWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProviderServicesCommand}
   */
  listProviderServices(): Promise<ListProviderServicesCommandOutput>;
  listProviderServices(
    args: ListProviderServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProviderServicesCommandOutput>;
  listProviderServices(
    args: ListProviderServicesCommandInput,
    cb: (err: any, data?: ListProviderServicesCommandOutput) => void
  ): void;
  listProviderServices(
    args: ListProviderServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProviderServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaMappingsCommand}
   */
  listSchemaMappings(): Promise<ListSchemaMappingsCommandOutput>;
  listSchemaMappings(
    args: ListSchemaMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaMappingsCommandOutput>;
  listSchemaMappings(
    args: ListSchemaMappingsCommandInput,
    cb: (err: any, data?: ListSchemaMappingsCommandOutput) => void
  ): void;
  listSchemaMappings(
    args: ListSchemaMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPolicyCommand}
   */
  putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
  putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
  putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartIdMappingJobCommand}
   */
  startIdMappingJob(
    args: StartIdMappingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartIdMappingJobCommandOutput>;
  startIdMappingJob(
    args: StartIdMappingJobCommandInput,
    cb: (err: any, data?: StartIdMappingJobCommandOutput) => void
  ): void;
  startIdMappingJob(
    args: StartIdMappingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartIdMappingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMatchingJobCommand}
   */
  startMatchingJob(
    args: StartMatchingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMatchingJobCommandOutput>;
  startMatchingJob(
    args: StartMatchingJobCommandInput,
    cb: (err: any, data?: StartMatchingJobCommandOutput) => void
  ): void;
  startMatchingJob(
    args: StartMatchingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMatchingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdMappingWorkflowCommand}
   */
  updateIdMappingWorkflow(
    args: UpdateIdMappingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdMappingWorkflowCommandOutput>;
  updateIdMappingWorkflow(
    args: UpdateIdMappingWorkflowCommandInput,
    cb: (err: any, data?: UpdateIdMappingWorkflowCommandOutput) => void
  ): void;
  updateIdMappingWorkflow(
    args: UpdateIdMappingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdMappingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdNamespaceCommand}
   */
  updateIdNamespace(
    args: UpdateIdNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdNamespaceCommandOutput>;
  updateIdNamespace(
    args: UpdateIdNamespaceCommandInput,
    cb: (err: any, data?: UpdateIdNamespaceCommandOutput) => void
  ): void;
  updateIdNamespace(
    args: UpdateIdNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMatchingWorkflowCommand}
   */
  updateMatchingWorkflow(
    args: UpdateMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMatchingWorkflowCommandOutput>;
  updateMatchingWorkflow(
    args: UpdateMatchingWorkflowCommandInput,
    cb: (err: any, data?: UpdateMatchingWorkflowCommandOutput) => void
  ): void;
  updateMatchingWorkflow(
    args: UpdateMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchemaMappingCommand}
   */
  updateSchemaMapping(
    args: UpdateSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchemaMappingCommandOutput>;
  updateSchemaMapping(
    args: UpdateSchemaMappingCommandInput,
    cb: (err: any, data?: UpdateSchemaMappingCommandOutput) => void
  ): void;
  updateSchemaMapping(
    args: UpdateSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaMappingCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the <i>Entity Resolution API Reference</i>.</p> <p>Entity Resolution is an Amazon Web Services service that provides pre-configured entity resolution capabilities that enable developers and analysts at advertising and marketing companies to build an accurate and complete view of their consumers.</p> <p> With Entity Resolution, you can match source records containing consumer identifiers, such as name, email address, and phone number. This is true even when these records have incomplete or conflicting identifiers. For example, Entity Resolution can effectively match a source record from a customer relationship management (CRM) system with a source record from a marketing system containing campaign information.</p> <p>To learn more about Entity Resolution concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/entityresolution/latest/userguide/what-is-service.html">Entity Resolution User Guide</a>.</p>
 * @public
 */
export class EntityResolution extends EntityResolutionClient implements EntityResolution {}
createAggregatedClient(commands, EntityResolution);
