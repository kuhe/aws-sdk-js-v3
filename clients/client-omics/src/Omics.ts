// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AbortMultipartReadSetUploadCommand,
  AbortMultipartReadSetUploadCommandInput,
  AbortMultipartReadSetUploadCommandOutput,
} from "./commands/AbortMultipartReadSetUploadCommand";
import { AcceptShareCommand, AcceptShareCommandInput, AcceptShareCommandOutput } from "./commands/AcceptShareCommand";
import {
  BatchDeleteReadSetCommand,
  BatchDeleteReadSetCommandInput,
  BatchDeleteReadSetCommandOutput,
} from "./commands/BatchDeleteReadSetCommand";
import {
  CancelAnnotationImportJobCommand,
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "./commands/CancelAnnotationImportJobCommand";
import { CancelRunCommand, CancelRunCommandInput, CancelRunCommandOutput } from "./commands/CancelRunCommand";
import {
  CancelVariantImportJobCommand,
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "./commands/CancelVariantImportJobCommand";
import {
  CompleteMultipartReadSetUploadCommand,
  CompleteMultipartReadSetUploadCommandInput,
  CompleteMultipartReadSetUploadCommandOutput,
} from "./commands/CompleteMultipartReadSetUploadCommand";
import {
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "./commands/CreateAnnotationStoreCommand";
import {
  CreateAnnotationStoreVersionCommand,
  CreateAnnotationStoreVersionCommandInput,
  CreateAnnotationStoreVersionCommandOutput,
} from "./commands/CreateAnnotationStoreVersionCommand";
import {
  CreateMultipartReadSetUploadCommand,
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
} from "./commands/CreateMultipartReadSetUploadCommand";
import {
  CreateReferenceStoreCommand,
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "./commands/CreateReferenceStoreCommand";
import {
  CreateRunCacheCommand,
  CreateRunCacheCommandInput,
  CreateRunCacheCommandOutput,
} from "./commands/CreateRunCacheCommand";
import {
  CreateRunGroupCommand,
  CreateRunGroupCommandInput,
  CreateRunGroupCommandOutput,
} from "./commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommand,
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "./commands/CreateSequenceStoreCommand";
import { CreateShareCommand, CreateShareCommandInput, CreateShareCommandOutput } from "./commands/CreateShareCommand";
import {
  CreateVariantStoreCommand,
  CreateVariantStoreCommandInput,
  CreateVariantStoreCommandOutput,
} from "./commands/CreateVariantStoreCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  CreateWorkflowVersionCommand,
  CreateWorkflowVersionCommandInput,
  CreateWorkflowVersionCommandOutput,
} from "./commands/CreateWorkflowVersionCommand";
import {
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "./commands/DeleteAnnotationStoreCommand";
import {
  DeleteAnnotationStoreVersionsCommand,
  DeleteAnnotationStoreVersionsCommandInput,
  DeleteAnnotationStoreVersionsCommandOutput,
} from "./commands/DeleteAnnotationStoreVersionsCommand";
import {
  DeleteReferenceCommand,
  DeleteReferenceCommandInput,
  DeleteReferenceCommandOutput,
} from "./commands/DeleteReferenceCommand";
import {
  DeleteReferenceStoreCommand,
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "./commands/DeleteReferenceStoreCommand";
import {
  DeleteRunCacheCommand,
  DeleteRunCacheCommandInput,
  DeleteRunCacheCommandOutput,
} from "./commands/DeleteRunCacheCommand";
import { DeleteRunCommand, DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import {
  DeleteRunGroupCommand,
  DeleteRunGroupCommandInput,
  DeleteRunGroupCommandOutput,
} from "./commands/DeleteRunGroupCommand";
import {
  DeleteS3AccessPolicyCommand,
  DeleteS3AccessPolicyCommandInput,
  DeleteS3AccessPolicyCommandOutput,
} from "./commands/DeleteS3AccessPolicyCommand";
import {
  DeleteSequenceStoreCommand,
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "./commands/DeleteSequenceStoreCommand";
import { DeleteShareCommand, DeleteShareCommandInput, DeleteShareCommandOutput } from "./commands/DeleteShareCommand";
import {
  DeleteVariantStoreCommand,
  DeleteVariantStoreCommandInput,
  DeleteVariantStoreCommandOutput,
} from "./commands/DeleteVariantStoreCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  DeleteWorkflowVersionCommand,
  DeleteWorkflowVersionCommandInput,
  DeleteWorkflowVersionCommandOutput,
} from "./commands/DeleteWorkflowVersionCommand";
import {
  GetAnnotationImportJobCommand,
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "./commands/GetAnnotationImportJobCommand";
import {
  GetAnnotationStoreCommand,
  GetAnnotationStoreCommandInput,
  GetAnnotationStoreCommandOutput,
} from "./commands/GetAnnotationStoreCommand";
import {
  GetAnnotationStoreVersionCommand,
  GetAnnotationStoreVersionCommandInput,
  GetAnnotationStoreVersionCommandOutput,
} from "./commands/GetAnnotationStoreVersionCommand";
import {
  GetReadSetActivationJobCommand,
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "./commands/GetReadSetActivationJobCommand";
import { GetReadSetCommand, GetReadSetCommandInput, GetReadSetCommandOutput } from "./commands/GetReadSetCommand";
import {
  GetReadSetExportJobCommand,
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "./commands/GetReadSetExportJobCommand";
import {
  GetReadSetImportJobCommand,
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "./commands/GetReadSetImportJobCommand";
import {
  GetReadSetMetadataCommand,
  GetReadSetMetadataCommandInput,
  GetReadSetMetadataCommandOutput,
} from "./commands/GetReadSetMetadataCommand";
import {
  GetReferenceCommand,
  GetReferenceCommandInput,
  GetReferenceCommandOutput,
} from "./commands/GetReferenceCommand";
import {
  GetReferenceImportJobCommand,
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "./commands/GetReferenceImportJobCommand";
import {
  GetReferenceMetadataCommand,
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "./commands/GetReferenceMetadataCommand";
import {
  GetReferenceStoreCommand,
  GetReferenceStoreCommandInput,
  GetReferenceStoreCommandOutput,
} from "./commands/GetReferenceStoreCommand";
import { GetRunCacheCommand, GetRunCacheCommandInput, GetRunCacheCommandOutput } from "./commands/GetRunCacheCommand";
import { GetRunCommand, GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetRunGroupCommand, GetRunGroupCommandInput, GetRunGroupCommandOutput } from "./commands/GetRunGroupCommand";
import { GetRunTaskCommand, GetRunTaskCommandInput, GetRunTaskCommandOutput } from "./commands/GetRunTaskCommand";
import {
  GetS3AccessPolicyCommand,
  GetS3AccessPolicyCommandInput,
  GetS3AccessPolicyCommandOutput,
} from "./commands/GetS3AccessPolicyCommand";
import {
  GetSequenceStoreCommand,
  GetSequenceStoreCommandInput,
  GetSequenceStoreCommandOutput,
} from "./commands/GetSequenceStoreCommand";
import { GetShareCommand, GetShareCommandInput, GetShareCommandOutput } from "./commands/GetShareCommand";
import {
  GetVariantImportJobCommand,
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "./commands/GetVariantImportJobCommand";
import {
  GetVariantStoreCommand,
  GetVariantStoreCommandInput,
  GetVariantStoreCommandOutput,
} from "./commands/GetVariantStoreCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowVersionCommand,
  GetWorkflowVersionCommandInput,
  GetWorkflowVersionCommandOutput,
} from "./commands/GetWorkflowVersionCommand";
import {
  ListAnnotationImportJobsCommand,
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "./commands/ListAnnotationImportJobsCommand";
import {
  ListAnnotationStoresCommand,
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "./commands/ListAnnotationStoresCommand";
import {
  ListAnnotationStoreVersionsCommand,
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
} from "./commands/ListAnnotationStoreVersionsCommand";
import {
  ListMultipartReadSetUploadsCommand,
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "./commands/ListMultipartReadSetUploadsCommand";
import {
  ListReadSetActivationJobsCommand,
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "./commands/ListReadSetActivationJobsCommand";
import {
  ListReadSetExportJobsCommand,
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "./commands/ListReadSetExportJobsCommand";
import {
  ListReadSetImportJobsCommand,
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "./commands/ListReadSetImportJobsCommand";
import {
  ListReadSetsCommand,
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput,
} from "./commands/ListReadSetsCommand";
import {
  ListReadSetUploadPartsCommand,
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "./commands/ListReadSetUploadPartsCommand";
import {
  ListReferenceImportJobsCommand,
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "./commands/ListReferenceImportJobsCommand";
import {
  ListReferencesCommand,
  ListReferencesCommandInput,
  ListReferencesCommandOutput,
} from "./commands/ListReferencesCommand";
import {
  ListReferenceStoresCommand,
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "./commands/ListReferenceStoresCommand";
import {
  ListRunCachesCommand,
  ListRunCachesCommandInput,
  ListRunCachesCommandOutput,
} from "./commands/ListRunCachesCommand";
import {
  ListRunGroupsCommand,
  ListRunGroupsCommandInput,
  ListRunGroupsCommandOutput,
} from "./commands/ListRunGroupsCommand";
import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import {
  ListRunTasksCommand,
  ListRunTasksCommandInput,
  ListRunTasksCommandOutput,
} from "./commands/ListRunTasksCommand";
import {
  ListSequenceStoresCommand,
  ListSequenceStoresCommandInput,
  ListSequenceStoresCommandOutput,
} from "./commands/ListSequenceStoresCommand";
import { ListSharesCommand, ListSharesCommandInput, ListSharesCommandOutput } from "./commands/ListSharesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVariantImportJobsCommand,
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "./commands/ListVariantImportJobsCommand";
import {
  ListVariantStoresCommand,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "./commands/ListVariantStoresCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "./commands/ListWorkflowVersionsCommand";
import {
  PutS3AccessPolicyCommand,
  PutS3AccessPolicyCommandInput,
  PutS3AccessPolicyCommandOutput,
} from "./commands/PutS3AccessPolicyCommand";
import {
  StartAnnotationImportJobCommand,
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "./commands/StartAnnotationImportJobCommand";
import {
  StartReadSetActivationJobCommand,
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "./commands/StartReadSetActivationJobCommand";
import {
  StartReadSetExportJobCommand,
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "./commands/StartReadSetExportJobCommand";
import {
  StartReadSetImportJobCommand,
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "./commands/StartReadSetImportJobCommand";
import {
  StartReferenceImportJobCommand,
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "./commands/StartReferenceImportJobCommand";
import { StartRunCommand, StartRunCommandInput, StartRunCommandOutput } from "./commands/StartRunCommand";
import {
  StartVariantImportJobCommand,
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "./commands/StartVariantImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnnotationStoreCommand,
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "./commands/UpdateAnnotationStoreCommand";
import {
  UpdateAnnotationStoreVersionCommand,
  UpdateAnnotationStoreVersionCommandInput,
  UpdateAnnotationStoreVersionCommandOutput,
} from "./commands/UpdateAnnotationStoreVersionCommand";
import {
  UpdateRunCacheCommand,
  UpdateRunCacheCommandInput,
  UpdateRunCacheCommandOutput,
} from "./commands/UpdateRunCacheCommand";
import {
  UpdateRunGroupCommand,
  UpdateRunGroupCommandInput,
  UpdateRunGroupCommandOutput,
} from "./commands/UpdateRunGroupCommand";
import {
  UpdateSequenceStoreCommand,
  UpdateSequenceStoreCommandInput,
  UpdateSequenceStoreCommandOutput,
} from "./commands/UpdateSequenceStoreCommand";
import {
  UpdateVariantStoreCommand,
  UpdateVariantStoreCommandInput,
  UpdateVariantStoreCommandOutput,
} from "./commands/UpdateVariantStoreCommand";
import {
  UpdateWorkflowCommand,
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
} from "./commands/UpdateWorkflowCommand";
import {
  UpdateWorkflowVersionCommand,
  UpdateWorkflowVersionCommandInput,
  UpdateWorkflowVersionCommandOutput,
} from "./commands/UpdateWorkflowVersionCommand";
import {
  UploadReadSetPartCommand,
  UploadReadSetPartCommandInput,
  UploadReadSetPartCommandOutput,
} from "./commands/UploadReadSetPartCommand";
import { OmicsClient, OmicsClientConfig } from "./OmicsClient";

const commands = {
  AbortMultipartReadSetUploadCommand,
  AcceptShareCommand,
  BatchDeleteReadSetCommand,
  CancelAnnotationImportJobCommand,
  CancelRunCommand,
  CancelVariantImportJobCommand,
  CompleteMultipartReadSetUploadCommand,
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreVersionCommand,
  CreateMultipartReadSetUploadCommand,
  CreateReferenceStoreCommand,
  CreateRunCacheCommand,
  CreateRunGroupCommand,
  CreateSequenceStoreCommand,
  CreateShareCommand,
  CreateVariantStoreCommand,
  CreateWorkflowCommand,
  CreateWorkflowVersionCommand,
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreVersionsCommand,
  DeleteReferenceCommand,
  DeleteReferenceStoreCommand,
  DeleteRunCommand,
  DeleteRunCacheCommand,
  DeleteRunGroupCommand,
  DeleteS3AccessPolicyCommand,
  DeleteSequenceStoreCommand,
  DeleteShareCommand,
  DeleteVariantStoreCommand,
  DeleteWorkflowCommand,
  DeleteWorkflowVersionCommand,
  GetAnnotationImportJobCommand,
  GetAnnotationStoreCommand,
  GetAnnotationStoreVersionCommand,
  GetReadSetCommand,
  GetReadSetActivationJobCommand,
  GetReadSetExportJobCommand,
  GetReadSetImportJobCommand,
  GetReadSetMetadataCommand,
  GetReferenceCommand,
  GetReferenceImportJobCommand,
  GetReferenceMetadataCommand,
  GetReferenceStoreCommand,
  GetRunCommand,
  GetRunCacheCommand,
  GetRunGroupCommand,
  GetRunTaskCommand,
  GetS3AccessPolicyCommand,
  GetSequenceStoreCommand,
  GetShareCommand,
  GetVariantImportJobCommand,
  GetVariantStoreCommand,
  GetWorkflowCommand,
  GetWorkflowVersionCommand,
  ListAnnotationImportJobsCommand,
  ListAnnotationStoresCommand,
  ListAnnotationStoreVersionsCommand,
  ListMultipartReadSetUploadsCommand,
  ListReadSetActivationJobsCommand,
  ListReadSetExportJobsCommand,
  ListReadSetImportJobsCommand,
  ListReadSetsCommand,
  ListReadSetUploadPartsCommand,
  ListReferenceImportJobsCommand,
  ListReferencesCommand,
  ListReferenceStoresCommand,
  ListRunCachesCommand,
  ListRunGroupsCommand,
  ListRunsCommand,
  ListRunTasksCommand,
  ListSequenceStoresCommand,
  ListSharesCommand,
  ListTagsForResourceCommand,
  ListVariantImportJobsCommand,
  ListVariantStoresCommand,
  ListWorkflowsCommand,
  ListWorkflowVersionsCommand,
  PutS3AccessPolicyCommand,
  StartAnnotationImportJobCommand,
  StartReadSetActivationJobCommand,
  StartReadSetExportJobCommand,
  StartReadSetImportJobCommand,
  StartReferenceImportJobCommand,
  StartRunCommand,
  StartVariantImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnnotationStoreCommand,
  UpdateAnnotationStoreVersionCommand,
  UpdateRunCacheCommand,
  UpdateRunGroupCommand,
  UpdateSequenceStoreCommand,
  UpdateVariantStoreCommand,
  UpdateWorkflowCommand,
  UpdateWorkflowVersionCommand,
  UploadReadSetPartCommand,
};

export interface Omics {
  /**
   * @see {@link AbortMultipartReadSetUploadCommand}
   */
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortMultipartReadSetUploadCommandOutput>;
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: AbortMultipartReadSetUploadCommandOutput) => void
  ): void;
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptShareCommand}
   */
  acceptShare(args: AcceptShareCommandInput, options?: __HttpHandlerOptions): Promise<AcceptShareCommandOutput>;
  acceptShare(args: AcceptShareCommandInput, cb: (err: any, data?: AcceptShareCommandOutput) => void): void;
  acceptShare(
    args: AcceptShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptShareCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteReadSetCommand}
   */
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteReadSetCommandOutput>;
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAnnotationImportJobCommand}
   */
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAnnotationImportJobCommandOutput>;
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRunCommand}
   */
  cancelRun(args: CancelRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelRunCommandOutput>;
  cancelRun(args: CancelRunCommandInput, cb: (err: any, data?: CancelRunCommandOutput) => void): void;
  cancelRun(
    args: CancelRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelVariantImportJobCommand}
   */
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelVariantImportJobCommandOutput>;
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMultipartReadSetUploadCommand}
   */
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMultipartReadSetUploadCommandOutput>;
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartReadSetUploadCommandOutput) => void
  ): void;
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnnotationStoreCommand}
   */
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnnotationStoreCommandOutput>;
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnnotationStoreVersionCommand}
   */
  createAnnotationStoreVersion(
    args: CreateAnnotationStoreVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnnotationStoreVersionCommandOutput>;
  createAnnotationStoreVersion(
    args: CreateAnnotationStoreVersionCommandInput,
    cb: (err: any, data?: CreateAnnotationStoreVersionCommandOutput) => void
  ): void;
  createAnnotationStoreVersion(
    args: CreateAnnotationStoreVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnnotationStoreVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultipartReadSetUploadCommand}
   */
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultipartReadSetUploadCommandOutput>;
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: CreateMultipartReadSetUploadCommandOutput) => void
  ): void;
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReferenceStoreCommand}
   */
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReferenceStoreCommandOutput>;
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRunCacheCommand}
   */
  createRunCache(
    args: CreateRunCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRunCacheCommandOutput>;
  createRunCache(args: CreateRunCacheCommandInput, cb: (err: any, data?: CreateRunCacheCommandOutput) => void): void;
  createRunCache(
    args: CreateRunCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRunGroupCommand}
   */
  createRunGroup(
    args: CreateRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRunGroupCommandOutput>;
  createRunGroup(args: CreateRunGroupCommandInput, cb: (err: any, data?: CreateRunGroupCommandOutput) => void): void;
  createRunGroup(
    args: CreateRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSequenceStoreCommand}
   */
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSequenceStoreCommandOutput>;
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateShareCommand}
   */
  createShare(args: CreateShareCommandInput, options?: __HttpHandlerOptions): Promise<CreateShareCommandOutput>;
  createShare(args: CreateShareCommandInput, cb: (err: any, data?: CreateShareCommandOutput) => void): void;
  createShare(
    args: CreateShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVariantStoreCommand}
   */
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVariantStoreCommandOutput>;
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowVersionCommand}
   */
  createWorkflowVersion(
    args: CreateWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowVersionCommandOutput>;
  createWorkflowVersion(
    args: CreateWorkflowVersionCommandInput,
    cb: (err: any, data?: CreateWorkflowVersionCommandOutput) => void
  ): void;
  createWorkflowVersion(
    args: CreateWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnnotationStoreCommand}
   */
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnnotationStoreCommandOutput>;
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnnotationStoreVersionsCommand}
   */
  deleteAnnotationStoreVersions(
    args: DeleteAnnotationStoreVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnnotationStoreVersionsCommandOutput>;
  deleteAnnotationStoreVersions(
    args: DeleteAnnotationStoreVersionsCommandInput,
    cb: (err: any, data?: DeleteAnnotationStoreVersionsCommandOutput) => void
  ): void;
  deleteAnnotationStoreVersions(
    args: DeleteAnnotationStoreVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnnotationStoreVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReferenceCommand}
   */
  deleteReference(
    args: DeleteReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReferenceCommandOutput>;
  deleteReference(args: DeleteReferenceCommandInput, cb: (err: any, data?: DeleteReferenceCommandOutput) => void): void;
  deleteReference(
    args: DeleteReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReferenceStoreCommand}
   */
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReferenceStoreCommandOutput>;
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunCommand}
   */
  deleteRun(args: DeleteRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRunCommandOutput>;
  deleteRun(args: DeleteRunCommandInput, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
  deleteRun(
    args: DeleteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunCacheCommand}
   */
  deleteRunCache(
    args: DeleteRunCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRunCacheCommandOutput>;
  deleteRunCache(args: DeleteRunCacheCommandInput, cb: (err: any, data?: DeleteRunCacheCommandOutput) => void): void;
  deleteRunCache(
    args: DeleteRunCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunGroupCommand}
   */
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRunGroupCommandOutput>;
  deleteRunGroup(args: DeleteRunGroupCommandInput, cb: (err: any, data?: DeleteRunGroupCommandOutput) => void): void;
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteS3AccessPolicyCommand}
   */
  deleteS3AccessPolicy(
    args: DeleteS3AccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteS3AccessPolicyCommandOutput>;
  deleteS3AccessPolicy(
    args: DeleteS3AccessPolicyCommandInput,
    cb: (err: any, data?: DeleteS3AccessPolicyCommandOutput) => void
  ): void;
  deleteS3AccessPolicy(
    args: DeleteS3AccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteS3AccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSequenceStoreCommand}
   */
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSequenceStoreCommandOutput>;
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteShareCommand}
   */
  deleteShare(args: DeleteShareCommandInput, options?: __HttpHandlerOptions): Promise<DeleteShareCommandOutput>;
  deleteShare(args: DeleteShareCommandInput, cb: (err: any, data?: DeleteShareCommandOutput) => void): void;
  deleteShare(
    args: DeleteShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVariantStoreCommand}
   */
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVariantStoreCommandOutput>;
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowVersionCommand}
   */
  deleteWorkflowVersion(
    args: DeleteWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowVersionCommandOutput>;
  deleteWorkflowVersion(
    args: DeleteWorkflowVersionCommandInput,
    cb: (err: any, data?: DeleteWorkflowVersionCommandOutput) => void
  ): void;
  deleteWorkflowVersion(
    args: DeleteWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationImportJobCommand}
   */
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationImportJobCommandOutput>;
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationStoreCommand}
   */
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationStoreCommandOutput>;
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationStoreVersionCommand}
   */
  getAnnotationStoreVersion(
    args: GetAnnotationStoreVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationStoreVersionCommandOutput>;
  getAnnotationStoreVersion(
    args: GetAnnotationStoreVersionCommandInput,
    cb: (err: any, data?: GetAnnotationStoreVersionCommandOutput) => void
  ): void;
  getAnnotationStoreVersion(
    args: GetAnnotationStoreVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationStoreVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetCommand}
   */
  getReadSet(args: GetReadSetCommandInput, options?: __HttpHandlerOptions): Promise<GetReadSetCommandOutput>;
  getReadSet(args: GetReadSetCommandInput, cb: (err: any, data?: GetReadSetCommandOutput) => void): void;
  getReadSet(
    args: GetReadSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetActivationJobCommand}
   */
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetActivationJobCommandOutput>;
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetExportJobCommand}
   */
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetExportJobCommandOutput>;
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetImportJobCommand}
   */
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetImportJobCommandOutput>;
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetMetadataCommand}
   */
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetMetadataCommandOutput>;
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceCommand}
   */
  getReference(args: GetReferenceCommandInput, options?: __HttpHandlerOptions): Promise<GetReferenceCommandOutput>;
  getReference(args: GetReferenceCommandInput, cb: (err: any, data?: GetReferenceCommandOutput) => void): void;
  getReference(
    args: GetReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceImportJobCommand}
   */
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceImportJobCommandOutput>;
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceMetadataCommand}
   */
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceMetadataCommandOutput>;
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceStoreCommand}
   */
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceStoreCommandOutput>;
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunCommand}
   */
  getRun(args: GetRunCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCommandOutput>;
  getRun(args: GetRunCommandInput, cb: (err: any, data?: GetRunCommandOutput) => void): void;
  getRun(
    args: GetRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunCacheCommand}
   */
  getRunCache(args: GetRunCacheCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCacheCommandOutput>;
  getRunCache(args: GetRunCacheCommandInput, cb: (err: any, data?: GetRunCacheCommandOutput) => void): void;
  getRunCache(
    args: GetRunCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunGroupCommand}
   */
  getRunGroup(args: GetRunGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetRunGroupCommandOutput>;
  getRunGroup(args: GetRunGroupCommandInput, cb: (err: any, data?: GetRunGroupCommandOutput) => void): void;
  getRunGroup(
    args: GetRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunTaskCommand}
   */
  getRunTask(args: GetRunTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetRunTaskCommandOutput>;
  getRunTask(args: GetRunTaskCommandInput, cb: (err: any, data?: GetRunTaskCommandOutput) => void): void;
  getRunTask(
    args: GetRunTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetS3AccessPolicyCommand}
   */
  getS3AccessPolicy(
    args: GetS3AccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetS3AccessPolicyCommandOutput>;
  getS3AccessPolicy(
    args: GetS3AccessPolicyCommandInput,
    cb: (err: any, data?: GetS3AccessPolicyCommandOutput) => void
  ): void;
  getS3AccessPolicy(
    args: GetS3AccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetS3AccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSequenceStoreCommand}
   */
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSequenceStoreCommandOutput>;
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShareCommand}
   */
  getShare(args: GetShareCommandInput, options?: __HttpHandlerOptions): Promise<GetShareCommandOutput>;
  getShare(args: GetShareCommandInput, cb: (err: any, data?: GetShareCommandOutput) => void): void;
  getShare(
    args: GetShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetShareCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariantImportJobCommand}
   */
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariantImportJobCommandOutput>;
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariantStoreCommand}
   */
  getVariantStore(
    args: GetVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariantStoreCommandOutput>;
  getVariantStore(args: GetVariantStoreCommandInput, cb: (err: any, data?: GetVariantStoreCommandOutput) => void): void;
  getVariantStore(
    args: GetVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowVersionCommand}
   */
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowVersionCommandOutput>;
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    cb: (err: any, data?: GetWorkflowVersionCommandOutput) => void
  ): void;
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationImportJobsCommand}
   */
  listAnnotationImportJobs(): Promise<ListAnnotationImportJobsCommandOutput>;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationImportJobsCommandOutput>;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationStoresCommand}
   */
  listAnnotationStores(): Promise<ListAnnotationStoresCommandOutput>;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationStoresCommandOutput>;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationStoreVersionsCommand}
   */
  listAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationStoreVersionsCommandOutput>;
  listAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    cb: (err: any, data?: ListAnnotationStoreVersionsCommandOutput) => void
  ): void;
  listAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationStoreVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultipartReadSetUploadsCommand}
   */
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultipartReadSetUploadsCommandOutput>;
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    cb: (err: any, data?: ListMultipartReadSetUploadsCommandOutput) => void
  ): void;
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultipartReadSetUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetActivationJobsCommand}
   */
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetActivationJobsCommandOutput>;
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetExportJobsCommand}
   */
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetExportJobsCommandOutput>;
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetImportJobsCommand}
   */
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetImportJobsCommandOutput>;
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetsCommand}
   */
  listReadSets(args: ListReadSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListReadSetsCommandOutput>;
  listReadSets(args: ListReadSetsCommandInput, cb: (err: any, data?: ListReadSetsCommandOutput) => void): void;
  listReadSets(
    args: ListReadSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetUploadPartsCommand}
   */
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetUploadPartsCommandOutput>;
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    cb: (err: any, data?: ListReadSetUploadPartsCommandOutput) => void
  ): void;
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetUploadPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferenceImportJobsCommand}
   */
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferenceImportJobsCommandOutput>;
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferencesCommand}
   */
  listReferences(
    args: ListReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferencesCommandOutput>;
  listReferences(args: ListReferencesCommandInput, cb: (err: any, data?: ListReferencesCommandOutput) => void): void;
  listReferences(
    args: ListReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferenceStoresCommand}
   */
  listReferenceStores(): Promise<ListReferenceStoresCommandOutput>;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferenceStoresCommandOutput>;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunCachesCommand}
   */
  listRunCaches(): Promise<ListRunCachesCommandOutput>;
  listRunCaches(args: ListRunCachesCommandInput, options?: __HttpHandlerOptions): Promise<ListRunCachesCommandOutput>;
  listRunCaches(args: ListRunCachesCommandInput, cb: (err: any, data?: ListRunCachesCommandOutput) => void): void;
  listRunCaches(
    args: ListRunCachesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunCachesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunGroupsCommand}
   */
  listRunGroups(): Promise<ListRunGroupsCommandOutput>;
  listRunGroups(args: ListRunGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunGroupsCommandOutput>;
  listRunGroups(args: ListRunGroupsCommandInput, cb: (err: any, data?: ListRunGroupsCommandOutput) => void): void;
  listRunGroups(
    args: ListRunGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunsCommand}
   */
  listRuns(): Promise<ListRunsCommandOutput>;
  listRuns(args: ListRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunsCommandOutput>;
  listRuns(args: ListRunsCommandInput, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
  listRuns(
    args: ListRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunTasksCommand}
   */
  listRunTasks(args: ListRunTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListRunTasksCommandOutput>;
  listRunTasks(args: ListRunTasksCommandInput, cb: (err: any, data?: ListRunTasksCommandOutput) => void): void;
  listRunTasks(
    args: ListRunTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSequenceStoresCommand}
   */
  listSequenceStores(): Promise<ListSequenceStoresCommandOutput>;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSequenceStoresCommandOutput>;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharesCommand}
   */
  listShares(args: ListSharesCommandInput, options?: __HttpHandlerOptions): Promise<ListSharesCommandOutput>;
  listShares(args: ListSharesCommandInput, cb: (err: any, data?: ListSharesCommandOutput) => void): void;
  listShares(
    args: ListSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharesCommandOutput) => void
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
   * @see {@link ListVariantImportJobsCommand}
   */
  listVariantImportJobs(): Promise<ListVariantImportJobsCommandOutput>;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVariantImportJobsCommandOutput>;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVariantStoresCommand}
   */
  listVariantStores(): Promise<ListVariantStoresCommandOutput>;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVariantStoresCommandOutput>;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowVersionsCommand}
   */
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowVersionsCommandOutput>;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutS3AccessPolicyCommand}
   */
  putS3AccessPolicy(
    args: PutS3AccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutS3AccessPolicyCommandOutput>;
  putS3AccessPolicy(
    args: PutS3AccessPolicyCommandInput,
    cb: (err: any, data?: PutS3AccessPolicyCommandOutput) => void
  ): void;
  putS3AccessPolicy(
    args: PutS3AccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutS3AccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAnnotationImportJobCommand}
   */
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAnnotationImportJobCommandOutput>;
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetActivationJobCommand}
   */
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetActivationJobCommandOutput>;
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetExportJobCommand}
   */
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetExportJobCommandOutput>;
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetImportJobCommand}
   */
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetImportJobCommandOutput>;
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReferenceImportJobCommand}
   */
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReferenceImportJobCommandOutput>;
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRunCommand}
   */
  startRun(args: StartRunCommandInput, options?: __HttpHandlerOptions): Promise<StartRunCommandOutput>;
  startRun(args: StartRunCommandInput, cb: (err: any, data?: StartRunCommandOutput) => void): void;
  startRun(
    args: StartRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVariantImportJobCommand}
   */
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVariantImportJobCommandOutput>;
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): void;
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
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
   * @see {@link UpdateAnnotationStoreCommand}
   */
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnnotationStoreCommandOutput>;
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnnotationStoreVersionCommand}
   */
  updateAnnotationStoreVersion(
    args: UpdateAnnotationStoreVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnnotationStoreVersionCommandOutput>;
  updateAnnotationStoreVersion(
    args: UpdateAnnotationStoreVersionCommandInput,
    cb: (err: any, data?: UpdateAnnotationStoreVersionCommandOutput) => void
  ): void;
  updateAnnotationStoreVersion(
    args: UpdateAnnotationStoreVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnnotationStoreVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRunCacheCommand}
   */
  updateRunCache(
    args: UpdateRunCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRunCacheCommandOutput>;
  updateRunCache(args: UpdateRunCacheCommandInput, cb: (err: any, data?: UpdateRunCacheCommandOutput) => void): void;
  updateRunCache(
    args: UpdateRunCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRunGroupCommand}
   */
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRunGroupCommandOutput>;
  updateRunGroup(args: UpdateRunGroupCommandInput, cb: (err: any, data?: UpdateRunGroupCommandOutput) => void): void;
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSequenceStoreCommand}
   */
  updateSequenceStore(
    args: UpdateSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSequenceStoreCommandOutput>;
  updateSequenceStore(
    args: UpdateSequenceStoreCommandInput,
    cb: (err: any, data?: UpdateSequenceStoreCommandOutput) => void
  ): void;
  updateSequenceStore(
    args: UpdateSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVariantStoreCommand}
   */
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVariantStoreCommandOutput>;
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(args: UpdateWorkflowCommandInput, cb: (err: any, data?: UpdateWorkflowCommandOutput) => void): void;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowVersionCommand}
   */
  updateWorkflowVersion(
    args: UpdateWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowVersionCommandOutput>;
  updateWorkflowVersion(
    args: UpdateWorkflowVersionCommandInput,
    cb: (err: any, data?: UpdateWorkflowVersionCommandOutput) => void
  ): void;
  updateWorkflowVersion(
    args: UpdateWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadReadSetPartCommand}
   */
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadReadSetPartCommandOutput>;
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    cb: (err: any, data?: UploadReadSetPartCommandOutput) => void
  ): void;
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadReadSetPartCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services HealthOmics is a service that helps users such as bioinformaticians, researchers, and scientists to store, query, analyze, and generate insights from genomics and other biological data. It simplifies and accelerates the process of storing and analyzing genomic information for Amazon Web Services.</p> <p>For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/what-is-healthomics.html">What is Amazon Web Services HealthOmics?</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @public
 */
export class Omics extends OmicsClient implements Omics {}
createAggregatedClient(commands, Omics);
