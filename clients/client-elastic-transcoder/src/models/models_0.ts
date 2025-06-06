// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElasticTranscoderServiceException as __BaseException } from "./ElasticTranscoderServiceException";

/**
 * <p>General authentication failure. The request was not signed correctly.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The encryption settings, if any, that are used for decrypting your input files or
 *             encrypting your output files. If your input file is encrypted, you must specify the mode
 *             that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want
 *             Elastic Transcoder to use to encrypt your output files.</p>
 * @public
 */
export interface Encryption {
  /**
   * <p>The specific server-side encryption mode that you want Elastic Transcoder to use when decrypting
   *             your input files or encrypting your output files. Elastic Transcoder supports the following options:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>s3:</b> Amazon S3 creates and manages the
   *                 keys used for encrypting your files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>s3-aws-kms:</b> Amazon S3 calls the Amazon Key Management
   *                 Service, which
   *                 creates and manages the keys that are used for encrypting your files. If you specify
   *                 <code>s3-aws-kms</code> and you don't want to use the default key,
   *                 you must add the AWS-KMS key that you want to use to your pipeline.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>aes-cbc-pkcs7:</b> A padded cipher-block
   *                 mode of operation originally used for HLS files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>aes-ctr:</b> AES Counter Mode.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>aes-gcm:</b> AES Galois Counter Mode,
   *                 a mode of operation that is an authenticated encryption format, meaning that a file, key,
   *                 or initialization vector that has been tampered with fails the decryption
   *                 process.</p>
   *             </li>
   *          </ul>
   *         <p>For all three AES options, you must provide the following settings, which must be base64-encoded:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Key</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Key MD5</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Initialization Vector</b>
   *                </p>
   *             </li>
   *          </ul>
   *         <important>
   *             <p>For the AES modes, your private encryption keys and your unencrypted data are never
   *              stored by AWS; therefore, it is important that you safely manage your encryption keys.
   *              If you lose them, you won't be able to unencrypt your data.</p>
   *          </important>
   * @public
   */
  Mode?: string | undefined;

  /**
   * <p>The data encryption key that you want Elastic Transcoder to use to encrypt your output file, or that
   *             was used to encrypt your input file. The key must be base64-encoded and it must be one of the
   *             following bit lengths before being base64-encoded:</p>
   *         <p>
   *             <code>128</code>, <code>192</code>, or <code>256</code>. </p>
   *         <p>The key must also be encrypted by using the Amazon Key Management Service.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The MD5 digest of the key that you used to encrypt your input file, or that you want
   *             Elastic Transcoder to use to encrypt your output file. Elastic Transcoder uses the key digest as a
   *             checksum to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded,
   *             and it must be exactly 16 bytes long before being base64-encoded.</p>
   * @public
   */
  KeyMd5?: string | undefined;

  /**
   * <p>The series of random bits created by a random bit generator, unique for every encryption
   *             operation, that you used to encrypt your input files or that you want Elastic Transcoder to use to encrypt
   *             your output files. The initialization vector must be base64-encoded, and it must be exactly
   *             16 bytes long before being base64-encoded.</p>
   * @public
   */
  InitializationVector?: string | undefined;
}

/**
 * <p>The file to be used as album art. There can be multiple artworks associated with an
 *             audio file, to a maximum of 20.</p>
 *         <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code>
 *             to null, or set the <code>Merge Policy</code> to "Replace" and use an empty
 *             <code>Artwork</code> array.</p>
 *         <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to
 *             "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
 * @public
 */
export interface Artwork {
  /**
   * <p>The name of the file to be used as album art. To determine which Amazon S3 bucket contains the
   *             specified file, Elastic Transcoder checks the pipeline specified by <code>PipelineId</code>; the
   *             <code>InputBucket</code> object in that pipeline identifies the bucket.</p>
   *         <p>If the file name includes a prefix, for example, <code>cooking/pie.jpg</code>,
   *             include the prefix in the key. If the file isn't in the specified bucket,
   *             Elastic Transcoder returns an error.</p>
   * @public
   */
  InputKey?: string | undefined;

  /**
   * <p>The maximum width of the output album art in pixels. If you specify <code>auto</code>, Elastic Transcoder
   *         uses 600 as the default value. If you specify a numeric value, enter an even integer between 32
   *         and 4096, inclusive.</p>
   * @public
   */
  MaxWidth?: string | undefined;

  /**
   * <p>The maximum height of the output album art in pixels. If you specify <code>auto</code>, Elastic Transcoder
   *         uses 600 as the default value. If you specify a numeric value, enter an even integer between 32
   *         and 3072, inclusive.</p>
   * @public
   */
  MaxHeight?: string | undefined;

  /**
   * <p>Specify one of the following values to control scaling of the output album art:</p>
   *
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>Fit:</code> Elastic Transcoder scales the output art so it matches the value that you
   *                     specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without
   *                     exceeding the other value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fill:</code> Elastic Transcoder scales the output art so it matches the value that you
   *                     specified in either <code>MaxWidth</code> or <code>MaxHeight</code> and matches or
   *                     exceeds the other value. Elastic Transcoder centers the output art and then crops it in the
   *                     dimension (if any) that exceeds the maximum value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stretch:</code> Elastic Transcoder stretches the output art to match the values that you
   *                     specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the relative
   *                     proportions of the input art and the output art are different, the output art will
   *                     be distorted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Keep:</code> Elastic Transcoder does not scale the output art. If either dimension of the
   *                     input art exceeds the values that you specified for <code>MaxWidth</code> and
   *                     <code>MaxHeight</code>, Elastic Transcoder crops the output art.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShrinkToFit:</code> Elastic Transcoder scales the output art down so that its dimensions
   *                     match the values that you specified for at least one of <code>MaxWidth</code> and
   *                     <code>MaxHeight</code> without exceeding either value. If you specify this option,
   *                     Elastic Transcoder does not scale the art up.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShrinkToFill</code> Elastic Transcoder scales the output art down so that its dimensions
   *                     match the values that you specified for at least one of <code>MaxWidth</code> and
   *                     <code>MaxHeight</code> without dropping below either value. If you specify this
   *                     option, Elastic Transcoder does not scale the art up.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SizingPolicy?: string | undefined;

  /**
   * <p>When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add white bars to the
   *         top and bottom and/or left and right sides of the output album art to make the total size of
   *         the output art match the values that you specified for <code>MaxWidth</code> and
   *         <code>MaxHeight</code>.</p>
   * @public
   */
  PaddingPolicy?: string | undefined;

  /**
   * <p>The format of album art, if any. Valid formats are <code>.jpg</code> and <code>.png</code>.</p>
   * @public
   */
  AlbumArtFormat?: string | undefined;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your artwork.</p>
   * @public
   */
  Encryption?: Encryption | undefined;
}

/**
 * <p>Options associated with your audio codec.</p>
 * @public
 */
export interface AudioCodecOptions {
  /**
   * <p>You can only choose an audio profile when you specify AAC for the value of Audio:Codec.</p>
   *         <p>Specify the AAC profile for the output file. Elastic Transcoder supports the following profiles:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>auto</code>: If you specify <code>auto</code>, Elastic Transcoder selects
   *                 the profile based on the bit rate selected for the output file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AAC-LC</code>: The most common AAC profile. Use for bit rates larger than
   *                 64 kbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HE-AAC</code>: Not supported on some older players and devices.
   *                 Use for bit rates between 40 and 80 kbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HE-AACv2</code>: Not supported on some players and devices.
   *                 Use for bit rates less than 48 kbps.</p>
   *             </li>
   *          </ul>
   *         <p>All outputs in a <code>Smooth</code> playlist must have the same value for <code>Profile</code>.</p>
   *         <note>
   *             <p>If you created any presets before AAC profiles were added, Elastic Transcoder automatically updated your
   *              presets to use AAC-LC. You can change the value as required.</p>
   *          </note>
   * @public
   */
  Profile?: string | undefined;

  /**
   * <p>You can only choose an audio bit depth when you specify <code>flac</code> or
   *            <code>pcm</code> for the value of Audio:Codec.</p>
   *         <p>The bit depth of a sample is how many bits of information are included in the
   *             audio samples. The higher the bit depth, the better the audio, but the larger the file.</p>
   *             <p>Valid values are <code>16</code> and <code>24</code>.</p>
   *             <p>The most common bit depth is <code>24</code>.</p>
   * @public
   */
  BitDepth?: string | undefined;

  /**
   * <p>You can only choose an audio bit order when you specify
   *            <code>pcm</code> for the value of Audio:Codec.</p>
   *          <p>The order the bits of a PCM sample are stored in.</p>
   *          <p>The supported value is <code>LittleEndian</code>.</p>
   * @public
   */
  BitOrder?: string | undefined;

  /**
   * <p>You can only choose whether an audio sample is signed when you specify
   *            <code>pcm</code> for the value of Audio:Codec.</p>
   *         <p>Whether audio samples are represented with negative and positive numbers (signed) or
   *             only positive numbers (unsigned).</p>
   *         <p>The supported value is <code>Signed</code>.</p>
   * @public
   */
  Signed?: string | undefined;
}

/**
 * <p>Parameters required for transcoding audio.</p>
 * @public
 */
export interface AudioParameters {
  /**
   * <p>The audio codec for the output file. Valid values include <code>aac</code>,
   *             <code>flac</code>, <code>mp2</code>, <code>mp3</code>, <code>pcm</code>,
   *             and <code>vorbis</code>.</p>
   * @public
   */
  Codec?: string | undefined;

  /**
   * <p>The sample rate of the audio stream in the output file, in Hertz. Valid values include:</p>
   *         <p>
   *             <code>auto</code>, <code>22050</code>, <code>32000</code>, <code>44100</code>,
   *                 <code>48000</code>, <code>96000</code>
   *          </p>
   *         <p>If you specify <code>auto</code>, Elastic Transcoder automatically detects the sample rate.</p>
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * <p>The bit rate of the audio stream in the output file, in kilobits/second. Enter an integer
   *             between 64 and 320, inclusive.</p>
   * @public
   */
  BitRate?: string | undefined;

  /**
   * <p>The number of audio channels in the output file. The following values are valid:</p>
   *         <p>
   *             <code>auto</code>, <code>0</code>, <code>1</code>, <code>2</code>
   *          </p>
   *         <p>One channel carries the information played by a single speaker. For example, a stereo
   *             track with two channels sends one channel to the left speaker, and the other
   *             channel to the right speaker. The output channels are organized into tracks.
   *             If you want Elastic Transcoder to automatically detect the number
   *             of audio channels in the input file and use that value for the output file, select
   *             <code>auto</code>.</p>
   *
   *         <p>The output of a specific channel value and inputs are as follows:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>auto</code>
   *                   <b> channel specified, with any input:</b> Pass through up to eight input channels.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>0</code>
   *                   <b> channels specified, with any input:</b> Audio omitted from the output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1</code>
   *                   <b> channel specified, with at least one input channel:</b> Mono sound.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code>
   *                   <b> channels specified, with any input:</b> Two identical mono channels or stereo. For more
   *                 information about tracks, see <code>Audio:AudioPackingMode.</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p> For more information about how Elastic Transcoder organizes channels and tracks, see
   *             <code>Audio:AudioPackingMode</code>.</p>
   * @public
   */
  Channels?: string | undefined;

  /**
   * <p>The method of organizing audio channels and tracks. Use <code>Audio:Channels</code> to
   *             specify the number of channels in your output, and <code>Audio:AudioPackingMode</code>
   *             to specify the number of tracks and their relation to the channels. If you do not specify
   *             an <code>Audio:AudioPackingMode</code>, Elastic Transcoder uses <code>SingleTrack</code>.</p>
   *         <p>The following values are valid:</p>
   *         <p>
   *             <code>SingleTrack</code>, <code>OneChannelPerTrack</code>, and <code>OneChannelPerTrackWithMosTo8Tracks</code>
   *          </p>
   *
   *         <p>When you specify <code>SingleTrack</code>, Elastic Transcoder creates a single track for your output.
   *             The track can have up to eight channels. Use <code>SingleTrack</code> for all non-<code>mxf</code>
   *             containers.</p>
   *
   *         <p>The outputs of <code>SingleTrack</code> for a specific channel value and inputs
   *             are as follows:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>0</code>
   *                   <b> channels with any input:</b> Audio omitted from the output</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1, 2, or auto </code>
   *                   <b>channels with no audio input:</b> Audio omitted from the output</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1 </code>
   *                   <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 </code>
   *                   <b>channels with one track with one channel:</b> One track with two identical channels</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 or auto </code>
   *                   <b>channels with two tracks with one channel each:</b> One track with two channels</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 or auto </code>
   *                   <b>channels with one track with two channels:</b> One track with two channels</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 </code>
   *                   <b>channels with one track with multiple channels:</b> One track with two channels</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>auto </code>
   *                   <b>channels with one track with one channel:</b> One track with one channel</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>auto </code>
   *                   <b>channels with one track with multiple channels:</b> One track with multiple channels</p>
   *             </li>
   *          </ul>
   *
   *         <p>When you specify <code>OneChannelPerTrack</code>, Elastic Transcoder creates a new track for every channel in your output. Your output
   *             can have up to eight single-channel tracks.</p>
   *         <p>The outputs of <code>OneChannelPerTrack</code> for a specific channel value and inputs
   *             are as follows:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>0 </code>
   *                   <b>channels with any input:</b> Audio omitted from the output</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1, 2, or auto </code>
   *                   <b>channels with no audio input:</b> Audio omitted from the output</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1 </code>
   *                   <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 </code>
   *                   <b>channels with one track with one channel:</b> Two tracks with one identical channel each</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 or auto </code>
   *                   <b>channels with two tracks with one channel each:</b> Two tracks with one channel each</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 or auto </code>
   *                   <b>channels with one track with two channels:</b> Two tracks with one channel each</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 </code>
   *                   <b>channels with one track with multiple channels:</b> Two tracks with one channel each</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>auto </code>
   *                   <b>channels with one track with one channel:</b> One track with one channel</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>auto </code>
   *                   <b>channels with one track with multiple channels:</b> Up to eight tracks with one channel each</p>
   *             </li>
   *          </ul>
   *
   *         <p>When you specify <code>OneChannelPerTrackWithMosTo8Tracks</code>, Elastic Transcoder creates eight single-channel
   *             tracks for your output. All tracks that do not contain audio data from an input channel are
   *             MOS, or Mit Out Sound, tracks.</p>
   *         <p>The outputs of <code>OneChannelPerTrackWithMosTo8Tracks</code> for a specific channel value and inputs
   *             are as follows:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>0 </code>
   *                   <b>channels with any input:</b> Audio omitted from the output</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1, 2, or auto </code>
   *                   <b>channels with no audio input:</b> Audio omitted from the output</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1 </code>
   *                   <b>channel with any input with audio:</b> One track with one channel,
   *                    downmixed if necessary, plus six MOS tracks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 </code>
   *                   <b>channels with one track with one channel:</b> Two tracks with one
   *                    identical channel each, plus six MOS tracks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 or auto </code>
   *                   <b>channels with two tracks with one channel each:</b> Two tracks with
   *                    one channel each, plus six MOS tracks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 or auto </code>
   *                   <b>channels with one track with two channels:</b> Two tracks with one
   *                    channel each, plus six MOS tracks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2 </code>
   *                   <b>channels with one track with multiple channels:</b> Two tracks with
   *                    one channel each, plus six MOS tracks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>auto </code>
   *                   <b>channels with one track with one channel:</b> One track with one
   *                    channel, plus seven MOS tracks</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>auto </code>
   *                   <b>channels with one track with multiple channels:</b> Up to eight
   *                    tracks with one channel each, plus MOS tracks
   *                 until there are eight tracks in all</p>
   *             </li>
   *          </ul>
   * @public
   */
  AudioPackingMode?: string | undefined;

  /**
   * <p>If you specified <code>AAC</code> for <code>Audio:Codec</code>, this is the <code>AAC</code>
   *             compression profile to use. Valid values include:</p>
   *         <p>
   *             <code>auto</code>, <code>AAC-LC</code>, <code>HE-AAC</code>, <code>HE-AACv2</code>
   *          </p>
   *         <p>If you specify <code>auto</code>, Elastic Transcoder chooses a profile based on the bit rate of the output file.</p>
   * @public
   */
  CodecOptions?: AudioCodecOptions | undefined;
}

/**
 * <p>The <code>CancelJobRequest</code> structure.</p>
 * @public
 */
export interface CancelJobRequest {
  /**
   * <p>The identifier of the job that you want to cancel.</p>
   *         <p>To get a list of the jobs (including their <code>jobId</code>) that have a status of
   *                 <code>Submitted</code>, use the <a>ListJobsByStatus</a> API action.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The response body contains a JSON object. If the job is successfully canceled, the value
 *             of <code>Success</code> is <code>true</code>.</p>
 * @public
 */
export interface CancelJobResponse {}

/**
 * @public
 */
export class IncompatibleVersionException extends __BaseException {
  readonly name: "IncompatibleVersionException" = "IncompatibleVersionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleVersionException, __BaseException>) {
    super({
      name: "IncompatibleVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleVersionException.prototype);
  }
}

/**
 * <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
  }
}

/**
 * <p>The resource you are attempting to change is in use. For example, you are attempting
 *             to delete a pipeline that is currently in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>One or more required parameter values were not provided in the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.</p>
 * @public
 */
export interface CaptionFormat {
  /**
   * <p>The format you specify determines whether Elastic Transcoder generates an embedded or sidecar caption for this output.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Valid Embedded Caption Formats:</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>for FLAC</b>: None</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>For MP3</b>: None</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>For MP4</b>: mov-text</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>For MPEG-TS</b>: None</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>For ogg</b>: None</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>For webm</b>: None</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Valid Sidecar Caption Formats:</b> Elastic Transcoder
   *             supports dfxp (first div element only), scc, srt, and webvtt.
   *             If you want ttml or smpte-tt
   *             compatible captions, specify dfxp as your output format.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>For FMP4</b>: dfxp</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Non-FMP4 outputs</b>: All sidecar types</p>
   *                   </li>
   *                </ul>
   *                <p>
   *                   <code>fmp4</code> captions have an extension of <code>.ismt</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The prefix for caption filenames, in the form <i>description</i>-<code>\{language\}</code>, where:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>description</i> is a description of the video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>\{language\}</code> is a literal value that Elastic Transcoder replaces with the two- or three-letter
   *             code for the language of the caption in the output file names.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't include <code>\{language\}</code> in the file name pattern, Elastic Transcoder automatically
   *          appends "<code>\{language\}</code>" to the value that you specify for the description.  In addition,
   *          Elastic Transcoder automatically appends the count to the end of the segment files.</p>
   *          <p>For example, suppose you're transcoding into srt format. When you enter "Sydney-\{language\}-sunrise",
   *           and the language of the captions is English (en), the name of the first caption file is be
   *           Sydney-en-sunrise00000.srt.</p>
   * @public
   */
  Pattern?: string | undefined;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your caption formats.</p>
   * @public
   */
  Encryption?: Encryption | undefined;
}

/**
 * <p>A source file for the input sidecar captions used during the transcoding process.</p>
 * @public
 */
export interface CaptionSource {
  /**
   * <p>The name of the sidecar caption file that you want Elastic Transcoder to include in the output file.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>A string that specifies the language of the caption. If you specified multiple inputs with captions,
   *             the caption language must match in order to be included in the output. Specify this as one of:</p>
   *         <ul>
   *             <li>
   *                 <p>2-character ISO 639-1 code</p>
   *             </li>
   *             <li>
   *                 <p>3-character ISO 639-2 code</p>
   *             </li>
   *          </ul>
   *         <p>For more information on ISO language codes and language names, see the List of ISO 639-1 codes.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>For clip generation or captions that do not start at the same time
   *             as the associated video file, the <code>TimeOffset</code> tells Elastic Transcoder how much of the video to encode
   *             before including captions.</p>
   *         <p>Specify the TimeOffset in the form [+-]SS.sss or [+-]HH:mm:SS.ss.</p>
   * @public
   */
  TimeOffset?: string | undefined;

  /**
   * <p>The label of the caption shown in the player when choosing a language. We recommend that you
   *             put the caption language name here, in the language of the captions.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>The encryption settings, if any, that Elastic Transcoder needs to decyrpt your caption sources, or that you
   *             want Elastic Transcoder to apply to your caption sources.</p>
   * @public
   */
  Encryption?: Encryption | undefined;
}

/**
 * <p>The captions to be created, if any.</p>
 * @public
 */
export interface Captions {
  /**
   * <p>A policy that determines how Elastic Transcoder handles the existence of multiple captions.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>MergeOverride:</b> Elastic Transcoder transcodes both embedded
   *             and sidecar captions into outputs. If captions for a language are embedded in the input
   *             file and also appear in a sidecar file, Elastic Transcoder uses the sidecar captions and ignores the
   *             embedded captions for that language.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MergeRetain:</b>  Elastic Transcoder transcodes both embedded
   *             and sidecar captions into outputs. If captions for a language are embedded in the input
   *             file and also appear in a sidecar file, Elastic Transcoder uses the embedded captions and ignores the
   *             sidecar captions for that language. If <code>CaptionSources</code> is empty,
   *             Elastic Transcoder omits all sidecar captions from the output files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Override:</b> Elastic Transcoder transcodes only the
   *             sidecar captions that you specify in <code>CaptionSources</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>MergePolicy</code> cannot be null.</p>
   *
   * @deprecated
   * @public
   */
  MergePolicy?: string | undefined;

  /**
   * <p>Source files for the input sidecar captions used during the transcoding
   *          process. To omit all sidecar captions, leave <code>CaptionSources</code> blank.</p>
   *
   * @deprecated
   * @public
   */
  CaptionSources?: CaptionSource[] | undefined;

  /**
   * <p>The array of file formats for the output captions. If you leave this value blank, Elastic Transcoder returns an error.</p>
   * @public
   */
  CaptionFormats?: CaptionFormat[] | undefined;
}

/**
 * <p>Settings that determine when a clip begins and how long it lasts.</p>
 * @public
 */
export interface TimeSpan {
  /**
   * <p>The place in the input file where you want a clip to start. The format can be either
   *            HH:mm:ss.SSS (maximum value: 23:59:59.999; SSS is thousandths of a second) or sssss.SSS
   *            (maximum value: 86399.999). If you don't specify a value, Elastic Transcoder starts at the beginning of
   *            the input file.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The duration of the clip. The format can be either HH:mm:ss.SSS (maximum value: 23:59:59.999;
   *            SSS is thousandths of a second) or sssss.SSS (maximum value: 86399.999). If you don't specify a
   *            value, Elastic Transcoder creates an output file from StartTime to the end of the file.</p>
   *          <p>If you specify a value longer than the duration of the input file, Elastic Transcoder transcodes the
   *            file and returns a warning message.</p>
   * @public
   */
  Duration?: string | undefined;
}

/**
 * <p>Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.</p>
 *
 * @deprecated
 * @public
 */
export interface Clip {
  /**
   * <p>Settings that determine when a clip begins and how long it lasts.</p>
   * @public
   */
  TimeSpan?: TimeSpan | undefined;
}

/**
 * <p>The detected properties of the input file. Elastic Transcoder identifies these values from the input file.</p>
 * @public
 */
export interface DetectedProperties {
  /**
   * <p>The detected width of the input file, in pixels.</p>
   * @public
   */
  Width?: number | undefined;

  /**
   * <p>The detected height of the input file, in pixels.</p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>The detected frame rate of the input file, in frames per second.</p>
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * <p>The detected file size of the input file, in bytes.</p>
   * @public
   */
  FileSize?: number | undefined;

  /**
   * <p>The detected duration of the input file, in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;
}

/**
 * <p>The captions to be created, if any.</p>
 * @public
 */
export interface InputCaptions {
  /**
   * <p>A policy that determines how Elastic Transcoder handles the existence of multiple captions.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>MergeOverride:</b> Elastic Transcoder transcodes both embedded
   *                     and sidecar captions into outputs. If captions for a language are embedded in the input
   *                     file and also appear in a sidecar file, Elastic Transcoder uses the sidecar captions and ignores the
   *                     embedded captions for that language.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>MergeRetain:</b>  Elastic Transcoder transcodes both embedded
   *                     and sidecar captions into outputs. If captions for a language are embedded in the input
   *                     file and also appear in a sidecar file, Elastic Transcoder uses the embedded captions and ignores the
   *                     sidecar captions for that language. If <code>CaptionSources</code> is empty,
   *                     Elastic Transcoder omits all sidecar captions from the output files.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Override:</b> Elastic Transcoder transcodes only the
   *                     sidecar captions that you specify in <code>CaptionSources</code>.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>MergePolicy</code> cannot be null.</p>
   * @public
   */
  MergePolicy?: string | undefined;

  /**
   * <p>Source files for the input sidecar captions used during the transcoding
   *             process. To omit all sidecar captions, leave <code>CaptionSources</code> blank.</p>
   * @public
   */
  CaptionSources?: CaptionSource[] | undefined;
}

/**
 * <p>Information about the file that you're transcoding.</p>
 * @public
 */
export interface JobInput {
  /**
   * <p> The name of the file to transcode. Elsewhere in the body of the JSON block is the the ID
   *             of the pipeline to use for processing the job. The <code>InputBucket</code> object in
   *             that pipeline tells Elastic Transcoder which Amazon S3 bucket to get the file from. </p>
   *         <p>If the file name includes a prefix, such as <code>cooking/lasagna.mpg</code>, include the
   *             prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The frame rate of the input file. If you want Elastic Transcoder to automatically detect the frame rate
   *             of the input file, specify <code>auto</code>. If you want to specify the frame rate for
   *             the input file, enter one of the following values: </p>
   *         <p>
   *             <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>,
   *                 <code>29.97</code>, <code>30</code>, <code>60</code>
   *         </p>
   *         <p>If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of
   *             the frame rate.</p>
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * <p>This value must be <code>auto</code>, which causes Elastic Transcoder to automatically
   *             detect the resolution of the input file.</p>
   * @public
   */
  Resolution?: string | undefined;

  /**
   * <p> The aspect ratio of the input file. If you want Elastic Transcoder to automatically detect the aspect
   *             ratio of the input file, specify <code>auto</code>. If you want to specify the aspect
   *             ratio for the output file, enter one of the following values: </p>
   *         <p>
   *             <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code>
   *         </p>
   *         <p> If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection
   *             of the aspect ratio. </p>
   * @public
   */
  AspectRatio?: string | undefined;

  /**
   * <p>Whether the input file is interlaced. If you want Elastic Transcoder to automatically detect whether
   *             the input file is interlaced, specify <code>auto</code>. If you want to specify whether
   *             the input file is interlaced, enter one of the following values:</p>
   *         <p>
   *             <code>true</code>, <code>false</code>
   *          </p>
   *         <p>If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of
   *             interlacing.</p>
   * @public
   */
  Interlaced?: string | undefined;

  /**
   * <p>The container type for the input file. If you want Elastic Transcoder to automatically detect the
   *             container type of the input file, specify <code>auto</code>. If you want to specify the
   *             container type for the input file, enter one of the following values: </p>
   *         <p>
   *             <code>3gp</code>, <code>aac</code>, <code>asf</code>, <code>avi</code>,
   *                 <code>divx</code>, <code>flv</code>, <code>m4a</code>, <code>mkv</code>,
   *                 <code>mov</code>, <code>mp3</code>, <code>mp4</code>, <code>mpeg</code>,
   *                 <code>mpeg-ps</code>, <code>mpeg-ts</code>, <code>mxf</code>, <code>ogg</code>,
   *                 <code>vob</code>, <code>wav</code>, <code>webm</code>
   *         </p>
   * @public
   */
  Container?: string | undefined;

  /**
   * <p>The encryption settings, if any, that are used for decrypting your input files. If
   *             your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p>Settings for clipping an input. Each input can have different clip settings.</p>
   * @public
   */
  TimeSpan?: TimeSpan | undefined;

  /**
   * <p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another.
   *             All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>Embedded:</b> Embedded captions
   *                     are included in the same file as the audio and video. Elastic Transcoder supports
   *                     only one embedded caption per language, to a maximum of 300 embedded captions per file.</p>
   *                 <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only),
   *                     <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code>
   *                 </p>
   *                 <p>Valid outputs include: <code>mov-text</code>
   *                 </p>
   *                 <p>Elastic Transcoder supports a maximum of one embedded format per output.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Sidecar:</b> Sidecar captions are kept in a
   *                     separate metadata file from the audio and video data.  Sidecar captions require a player
   *                     that is capable of understanding the relationship between the video file and the sidecar
   *                     file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar
   *                     captions per file.</p>
   *                 <p>Valid input values include: <code>dfxp</code> (first div element only),
   *                     <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>,
   *                     <code>ttml</code> (first div element only), and <code>webvtt</code>
   *                 </p>
   *                 <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>,
   *                     <code>srt</code>, and <code>webvtt</code>.</p>
   *             </li>
   *          </ul>
   *         <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p>
   *         <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures
   *             as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does
   *             not preserve text formatting (for example, italics) during the transcoding process.</p>
   *         <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through
   *             existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>,
   *             and pass in a null <code>CaptionSources</code> array.</p>
   *         <p>For more information on embedded files, see the Subtitles Wikipedia page.</p>
   *         <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>
   * @public
   */
  InputCaptions?: InputCaptions | undefined;

  /**
   * <p>The detected properties of the input file.</p>
   * @public
   */
  DetectedProperties?: DetectedProperties | undefined;
}

/**
 * <p>The .jpg or .png file associated with an audio file.</p>
 * @public
 */
export interface JobAlbumArt {
  /**
   * <p>A policy that determines how Elastic Transcoder handles the existence of multiple album artwork files.</p>
   *
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>Replace:</code> The specified album art replaces any existing album art.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Prepend:</code> The specified album art is placed in front of any existing
   *                     album art.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Append:</code> The specified album art is placed after any existing album art.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fallback:</code> If the original input file contains artwork, Elastic Transcoder uses that
   *                     artwork for the output. If the original input does not contain artwork, Elastic Transcoder uses the
   *                     specified album art file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MergePolicy?: string | undefined;

  /**
   * <p>The file to be used as album art. There can be multiple artworks associated with an audio file,
   *             to a maximum of 20. Valid formats are <code>.jpg</code> and <code>.png</code>
   *          </p>
   * @public
   */
  Artwork?: Artwork[] | undefined;
}

/**
 * <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not
 *     rectangular, use the .png format, which supports transparency.</p>
 * @public
 */
export interface JobWatermark {
  /**
   * <p>The ID of the watermark settings that Elastic Transcoder uses to add watermarks to the video during transcoding.
   *     The settings are in the preset specified by Preset for the current output. In that preset, the value
   *     of Watermarks Id tells Elastic Transcoder which settings to use.</p>
   * @public
   */
  PresetWatermarkId?: string | undefined;

  /**
   * <p> The name of the .png or .jpg file that you want to use for the watermark. To determine
   *     which Amazon S3 bucket contains the specified file, Elastic Transcoder checks the pipeline specified by
   *         <code>Pipeline</code>; the <code>Input Bucket</code> object in that pipeline
   *     identifies the bucket.</p>
   *          <p> If the file name includes a prefix, for example, <b>logos/128x64.png</b>,
   *     include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns
   *     an error. </p>
   * @public
   */
  InputKey?: string | undefined;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your watermarks.</p>
   * @public
   */
  Encryption?: Encryption | undefined;
}

/**
 * <p>The <code>CreateJobOutput</code> structure.</p>
 * @public
 */
export interface CreateJobOutput {
  /**
   * <p> The name to assign to the transcoded file. Elastic Transcoder saves the file in the Amazon S3 bucket
   *     specified by the <code>OutputBucket</code> object in the pipeline that is specified by
   *     the pipeline ID. If a file with the specified name already exists in the output bucket,
   *     the job fails. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Whether you want Elastic Transcoder to create thumbnails for your videos and, if so, how you want Elastic Transcoder to name the files.</p>
   *          <p>If you don't want Elastic Transcoder to create thumbnails, specify "".</p>
   *          <p>If you do want Elastic Transcoder to create thumbnails, specify the information that you want to include
   *     in the file name for each thumbnail. You can specify the following values in any sequence:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>\{count\}</code> (Required)</b>: If you want to create thumbnails, you
   *             must include <code>\{count\}</code> in the <code>ThumbnailPattern</code> object.
   *             Wherever you specify <code>\{count\}</code>, Elastic Transcoder adds a five-digit sequence
   *             number (beginning with <b>00001</b>) to thumbnail file names. The number
   *             indicates where a given thumbnail appears in the sequence of thumbnails for a
   *             transcoded file. </p>
   *                <important>
   *                   <p>If you specify a literal value and/or <code>\{resolution\}</code> but you
   *             omit <code>\{count\}</code>, Elastic Transcoder returns a validation error and does not create
   *             the job.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Literal values (Optional)</b>: You can specify literal values anywhere in the
   *                 <code>ThumbnailPattern</code> object. For example, you can include them as a
   *             file name prefix or as a delimiter between <code>\{resolution\}</code> and
   *                 <code>\{count\}</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>\{resolution\}</code> (Optional)</b>: If you want Elastic Transcoder to include the
   *             resolution in the file name, include <code>\{resolution\}</code> in the
   *                 <code>ThumbnailPattern</code> object. </p>
   *             </li>
   *          </ul>
   *          <p>When creating thumbnails, Elastic Transcoder automatically saves the files in the format (.jpg or .png)
   *     that appears in the preset that you specified in the <code>PresetID</code> value of
   *         <code>CreateJobOutput</code>. Elastic Transcoder also appends the applicable file name
   *     extension.</p>
   * @public
   */
  ThumbnailPattern?: string | undefined;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your thumbnail.</p>
   * @public
   */
  ThumbnailEncryption?: Encryption | undefined;

  /**
   * <p> The number of degrees clockwise by which you want Elastic Transcoder to rotate the output relative to
   *     the input. Enter one of the following values: <code>auto</code>, <code>0</code>,
   *         <code>90</code>, <code>180</code>, <code>270</code>. The value <code>auto</code>
   *     generally works only if the file that you're transcoding contains rotation metadata.
   * </p>
   * @public
   */
  Rotate?: string | undefined;

  /**
   * <p> The <code>Id</code> of the preset to use for this job. The preset determines the audio,
   *     video, and thumbnail settings that Elastic Transcoder uses for transcoding. </p>
   * @public
   */
  PresetId?: string | undefined;

  /**
   * <important>
   *             <p>(Outputs in Fragmented MP4 or MPEG-TS format only.</p>
   *          </important>
   *          <p>If you specify a preset in
   *         <code>PresetId</code> for which the value of <code>Container</code> is <code>fmp4</code> (Fragmented MP4) or
   *         <code>ts</code> (MPEG-TS), <code>SegmentDuration</code> is the target maximum duration of
   *     each segment in seconds. For <code>HLSv3</code> format playlists,
   *     each media segment is stored in a separate <code>.ts</code> file. For <code>HLSv4</code> and <code>Smooth</code>
   *     playlists, all media segments for an output are stored in a single file. Each segment is approximately the length of
   *     the <code>SegmentDuration</code>, though individual segments might be shorter or longer.</p>
   *
   *          <p>The range of valid values is 1 to 60 seconds. If the duration
   *     of the video is not evenly divisible by <code>SegmentDuration</code>, the duration of
   *     the last segment is the remainder of total length/SegmentDuration.</p>
   *          <p>Elastic Transcoder
   *     creates an output-specific playlist for each output <code>HLS</code> output that you specify in OutputKeys. To
   *     add an output to the master playlist for this job, include it in the <code>OutputKeys</code> of
   *     the associated playlist.</p>
   * @public
   */
  SegmentDuration?: string | undefined;

  /**
   * <p>Information about the watermarks that you want Elastic Transcoder to add to the video during transcoding.
   *     You can specify up to four watermarks for each output. Settings for each watermark must be defined
   *     in the preset for the current output.</p>
   * @public
   */
  Watermarks?: JobWatermark[] | undefined;

  /**
   * <p>Information about the album art that you want Elastic Transcoder to add to the file during transcoding.
   *             You can specify up to twenty album artworks for each output. Settings for each artwork must be
   *             defined in the job for the current output.</p>
   * @public
   */
  AlbumArt?: JobAlbumArt | undefined;

  /**
   * <p>You can create an output file that contains an excerpt from the input file. This excerpt, called a
   *             clip, can come from the beginning, middle, or end of the file. The Composition object contains settings
   *             for the clips that make up an output file. For the current release, you can only specify settings for a
   *             single clip per output file. The Composition object cannot be null.</p>
   *
   * @deprecated
   * @public
   */
  Composition?: Clip[] | undefined;

  /**
   * <p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another. All
   *           captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Embedded:</b> Embedded captions
   *             are included in the same file as the audio and video. Elastic Transcoder supports
   *             only one embedded caption per language, to a maximum of 300 embedded captions per file.</p>
   *                <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only),
   *             	<code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code>
   *                </p>
   *                <p>Valid outputs include: <code>mov-text</code>
   *                </p>
   *                <p>Elastic Transcoder supports a maximum of one embedded format per output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Sidecar:</b> Sidecar captions are kept in a
   *             separate metadata file from the audio and video data.  Sidecar captions require a player
   *             that is capable of understanding the relationship between the video file and the sidecar
   *             file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar
   *             captions per file.</p>
   *                <p>Valid input values include: <code>dfxp</code> (first div element only),
   *                <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>,
   *                <code>ttml</code> (first div element only), and <code>webvtt</code>
   *                </p>
   *                <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>,
   *                <code>srt</code>, and <code>webvtt</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p>
   *          <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures
   *              as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does
   *              not preserve text formatting (for example, italics) during the transcoding process.</p>
   *          <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through
   *              existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>,
   *              and pass in a null <code>CaptionSources</code> array.</p>
   *          <p>For more information on embedded files, see the Subtitles Wikipedia page.</p>
   *          <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>
   * @public
   */
  Captions?: Captions | undefined;

  /**
   * <p>You can specify encryption settings for any output files that you want to use for a
   *     transcoding job. This includes the output file and any watermarks, thumbnails, album art,
   *     or captions that you want to use. You must specify encryption settings for each file
   *     individually.</p>
   * @public
   */
  Encryption?: Encryption | undefined;
}

/**
 * <p>The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.</p>
 * @public
 */
export interface HlsContentProtection {
  /**
   * <p>The content protection method for your output. The only valid value is:
   * <code>aes-128</code>.</p>
   *          <p>This value is written into the method attribute of the <code>EXT-X-KEY</code> metadata tag in the output
   * playlist.</p>
   * @public
   */
  Method?: string | undefined;

  /**
   * <p>If you want Elastic Transcoder to generate a key for you, leave this field blank.</p>
   *          <p>If you choose to supply your own key, you must encrypt the key by using AWS KMS. The key must be
   *     base64-encoded, and it must be one of the following bit lengths before being base64-encoded:</p>
   *          <p>
   *             <code>128</code>, <code>192</code>, or <code>256</code>. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>If Elastic Transcoder is generating your key for you, you must leave this field blank.</p>
   *          <p>The MD5 digest of the key that you want Elastic Transcoder to use to encrypt your output file, and that you want
   *     Elastic Transcoder to use as a checksum to make sure your key was not corrupted in transit. The key MD5 must be
   *     base64-encoded, and it must be exactly 16 bytes before being base64- encoded.</p>
   * @public
   */
  KeyMd5?: string | undefined;

  /**
   * <p>If Elastic Transcoder is generating your key for you, you must leave this field blank.</p>
   *          <p>The series of random bits created by a random bit generator, unique for every encryption operation,
   *     that you want Elastic Transcoder to use to encrypt your output files. The initialization vector must be base64-encoded,
   *     and it must be exactly 16 bytes before being base64-encoded.</p>
   * @public
   */
  InitializationVector?: string | undefined;

  /**
   * <p>The location of the license key required to decrypt your HLS playlist. The URL must be an absolute
   *     path, and is referenced in the URI attribute of the EXT-X-KEY metadata tag in the playlist file.</p>
   * @public
   */
  LicenseAcquisitionUrl?: string | undefined;

  /**
   * <p>Specify whether you want Elastic Transcoder to write your HLS license key to an Amazon S3 bucket. If
   * you choose <code>WithVariantPlaylists</code>, <code>LicenseAcquisitionUrl</code> must be left blank and Elastic Transcoder
   * writes your data key into the same bucket as the associated playlist.</p>
   * @public
   */
  KeyStoragePolicy?: string | undefined;
}

/**
 * <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p>
 *          <p>PlayReady DRM encrypts your media files
 * using <code>aes-ctr</code> encryption.</p>
 *          <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
 * @public
 */
export interface PlayReadyDrm {
  /**
   * <p>The type of DRM, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The DRM key for your file, provided by your DRM license provider. The key must be base64-encoded,
   *     and it must be one of the following bit lengths before being base64-encoded:</p>
   *          <p>
   *             <code>128</code>, <code>192</code>, or <code>256</code>. </p>
   *          <p>The key must also be encrypted by using AWS KMS.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The MD5 digest of the key used for DRM on your file, and that you want Elastic Transcoder to use as a checksum
   *     to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded, and it must be
   *     exactly 16 bytes before being base64-encoded.</p>
   * @public
   */
  KeyMd5?: string | undefined;

  /**
   * <p>The ID for your DRM key, so that your DRM license provider knows which key to provide.</p>
   *          <p>The key ID must be provided in big endian, and Elastic Transcoder converts it to little endian before inserting
   *     it into the PlayReady DRM headers. If you are unsure whether your license server provides your key ID in
   *     big or little endian, check with your DRM provider.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The series of random bits created by a random bit generator, unique for every encryption operation,
   *     that you want Elastic Transcoder to use to encrypt your files. The initialization vector must be base64-encoded, and it
   *     must be exactly 8 bytes long before being base64-encoded. If no initialization vector is provided, Elastic Transcoder
   *     generates one for you.</p>
   * @public
   */
  InitializationVector?: string | undefined;

  /**
   * <p>The location of the license key required to play DRM content. The URL must be an absolute path,
   * and is referenced by the PlayReady header. The PlayReady header is referenced in the protection
   * header of the client manifest for Smooth Streaming outputs, and in the EXT-X-DXDRM and EXT-XDXDRMINFO
   * metadata tags for HLS playlist outputs. An example URL looks like this:
   * <code>https://www.example.com/exampleKey/</code>
   *          </p>
   * @public
   */
  LicenseAcquisitionUrl?: string | undefined;
}

/**
 * <p>Information about the master playlist.</p>
 * @public
 */
export interface CreateJobPlaylist {
  /**
   * <p>The name that you want Elastic Transcoder to assign to the master playlist, for example,
   *     nyc-vacation.m3u8. If the name includes a <code>/</code> character,
   *     the section of the name before the last <code>/</code> must be identical
   *     for all <code>Name</code> objects. If you create more than one
   *     master playlist, the values of all <code>Name</code> objects must be
   *     unique.</p>
   *          <note>
   *             <p>
   *     Elastic Transcoder automatically appends the relevant file extension to the file name (<code>.m3u8</code>
   *             for <code>HLSv3</code> and <code>HLSv4</code> playlists, and <code>.ism</code> and <code>.ismc</code> for
   *             <code>Smooth</code> playlists).
   *             If you include a file extension in <code>Name</code>, the file name will have
   *             two extensions.</p>
   *          </note>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The format of the output playlist. Valid formats include <code>HLSv3</code>,
   *             <code>HLSv4</code>, and <code>Smooth</code>.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>For each output in this job that you want to include in a master playlist, the value of
   *             the <code>Outputs:Key</code> object. </p>
   *         <ul>
   *             <li>
   *                 <p>If your output is not <code>HLS</code> or does not have a segment duration set,
   *                     the name of the output file is a concatenation of <code>OutputKeyPrefix</code>
   *                     and <code>Outputs:Key</code>:</p>
   *                 <p>OutputKeyPrefix<code>Outputs:Key</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>If your output is <code>HLSv3</code> and has a segment duration set, or is not included in a
   *                     playlist, Elastic Transcoder creates an output playlist file with a file extension of <code>.m3u8</code>, and a
   *                     series of <code>.ts</code> files that include a five-digit
   *                     sequential counter beginning with 00000:</p>
   *                 <p>OutputKeyPrefix<code>Outputs:Key</code>.m3u8</p>
   *                 <p>OutputKeyPrefix<code>Outputs:Key</code>00000.ts</p>
   *             </li>
   *             <li>
   *                 <p>If your output is <code>HLSv4</code>, has a segment duration set, and is included in an
   *                     <code>HLSv4</code> playlist, Elastic Transcoder creates an output playlist file with a file extension
   *                     of <code>_v4.m3u8</code>. If the output is video, Elastic Transcoder also creates an output file with
   *                     an extension of <code>_iframe.m3u8</code>:</p>
   *                 <p>OutputKeyPrefix<code>Outputs:Key</code>_v4.m3u8</p>
   *                 <p>OutputKeyPrefix<code>Outputs:Key</code>_iframe.m3u8</p>
   *                 <p>OutputKeyPrefix<code>Outputs:Key</code>.ts</p>
   *             </li>
   *          </ul>
   *
   *         <p>Elastic Transcoder automatically appends the relevant file extension to the file name. If you include a
   *             file extension in Output Key, the file name will have two extensions.</p>
   *
   *         <p>If you include more than one output in a playlist,
   *             any segment duration settings, clip settings, or caption settings must be the
   *             same for all outputs in the playlist. For <code>Smooth</code> playlists, the <code>Audio:Profile</code>,
   *             <code>Video:Profile</code>, and <code>Video:FrameRate</code> to
   *             <code>Video:KeyframesMaxDist</code> ratio must be the same for all outputs.</p>
   * @public
   */
  OutputKeys?: string[] | undefined;

  /**
   * <p>The HLS content protection settings, if any, that you want Elastic Transcoder to apply to the output
   *             files associated with this playlist.</p>
   * @public
   */
  HlsContentProtection?: HlsContentProtection | undefined;

  /**
   * <p>The DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p>
   * @public
   */
  PlayReadyDrm?: PlayReadyDrm | undefined;
}

/**
 * <p>The <code>CreateJobRequest</code> structure.</p>
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for
   *             transcoding. The pipeline determines several settings, including the Amazon S3 bucket
   *             from which Elastic Transcoder gets the files to transcode and the bucket into which
   *             Elastic Transcoder puts the transcoded files.</p>
   * @public
   */
  PipelineId: string | undefined;

  /**
   * <p>A section of the request body that provides information about the file that is being
   *              transcoded.</p>
   * @public
   */
  Input?: JobInput | undefined;

  /**
   * <p>A section of the request body that provides information about the files that are being
   *             transcoded.</p>
   * @public
   */
  Inputs?: JobInput[] | undefined;

  /**
   * <p> A section of the request body that provides information about the transcoded (target)
   *             file. We strongly recommend that you use the <code>Outputs</code> syntax instead of the
   *             <code>Output</code> syntax. </p>
   * @public
   */
  Output?: CreateJobOutput | undefined;

  /**
   * <p> A section of the request body that provides information about the transcoded (target)
   *             files. We recommend that you use the <code>Outputs</code> syntax instead of the
   *                 <code>Output</code> syntax. </p>
   * @public
   */
  Outputs?: CreateJobOutput[] | undefined;

  /**
   * <p>The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this
   *             job creates, including output files, thumbnails, and playlists.</p>
   * @public
   */
  OutputKeyPrefix?: string | undefined;

  /**
   * <p>If you specify a preset in <code>PresetId</code> for which the value of
   *                 <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains
   *                 information about the master playlists that you want Elastic Transcoder to create.</p>
   *         <p>The maximum number of master playlists in a job is 30.</p>
   * @public
   */
  Playlists?: CreateJobPlaylist[] | undefined;

  /**
   * <p>User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in
   *             <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job.
   *             Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same
   *             order in which you specify them.</p>
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;
}

/**
 * <important>
 *             <p>Outputs recommended instead.</p>
 *          </important>
 * 		       <p>If you specified one output for a job,
 *             information about that output. If you specified multiple outputs for a job, the
 *                 <code>Output</code> object lists information about the first output. This duplicates
 *             the information that is listed for the first output in the <code>Outputs</code>
 *             object.</p>
 * @public
 */
export interface JobOutput {
  /**
   * <p>A sequential counter, starting with 1, that identifies an output among the outputs from
   *             the current job. In the Output syntax, this value is always 1.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> The name to assign to the transcoded file. Elastic Transcoder saves the file in the Amazon S3 bucket
   *             specified by the <code>OutputBucket</code> object in the pipeline that is specified by
   *             the pipeline ID.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Whether you want Elastic Transcoder to create thumbnails for your videos and, if so, how you want
   *             Elastic Transcoder to name the files.</p>
   *         <p>If you don't want Elastic Transcoder to create thumbnails, specify "".</p>
   *         <p>If you do want Elastic Transcoder to create thumbnails, specify the information that you want to
   *             include in the file name for each thumbnail. You can specify the following values in any sequence:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>
   *                      <code>\{count\}</code> (Required)</b>: If you want to create thumbnails, you
   *                     must include <code>\{count\}</code> in the <code>ThumbnailPattern</code> object.
   *                     Wherever you specify <code>\{count\}</code>, Elastic Transcoder adds a five-digit sequence
   *                     number (beginning with <b>00001</b>) to thumbnail file names. The number
   *                     indicates where a given thumbnail appears in the sequence of thumbnails for a
   *                     transcoded file. </p>
   *                 <important>
   *                   <p>If you specify a literal value and/or <code>\{resolution\}</code> but you
   *                     omit <code>\{count\}</code>, Elastic Transcoder returns a validation error and does not create
   *                     the job.</p>
   *                </important>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Literal values (Optional)</b>: You can specify literal values anywhere in the
   *                         <code>ThumbnailPattern</code> object. For example, you can include them as a
   *                     file name prefix or as a delimiter between <code>\{resolution\}</code> and
   *                         <code>\{count\}</code>. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>
   *                      <code>\{resolution\}</code> (Optional)</b>: If you want Elastic Transcoder to include the
   *                     resolution in the file name, include <code>\{resolution\}</code> in the
   *                         <code>ThumbnailPattern</code> object. </p>
   *             </li>
   *          </ul>
   *         <p>When creating thumbnails, Elastic Transcoder automatically saves the files in the format (.jpg or .png)
   *             that appears in the preset that you specified in the <code>PresetID</code> value of
   *                 <code>CreateJobOutput</code>. Elastic Transcoder also appends the applicable file name
   *             extension.</p>
   * @public
   */
  ThumbnailPattern?: string | undefined;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your thumbnail.</p>
   * @public
   */
  ThumbnailEncryption?: Encryption | undefined;

  /**
   * <p>The number of degrees clockwise by which you want Elastic Transcoder to rotate the output relative
   *             to the input. Enter one of the following values:</p>
   *         <p>
   *             <code>auto</code>, <code>0</code>, <code>90</code>, <code>180</code>,
   *             <code>270</code>
   *          </p>
   *         <p> The value <code>auto</code> generally works only if the file that you're transcoding
   *             contains rotation metadata.</p>
   * @public
   */
  Rotate?: string | undefined;

  /**
   * <p>The value of the <code>Id</code> object for the preset that you want to use for this job.
   *             The preset determines the audio, video, and thumbnail settings that Elastic Transcoder
   *             uses for transcoding. To use a preset that you created, specify the preset ID that
   *             Elastic Transcoder returned in the response when you created the preset. You can also
   *             use the Elastic Transcoder system presets, which you can get with <code>ListPresets</code>.</p>
   * @public
   */
  PresetId?: string | undefined;

  /**
   * <important>
   *             <p>(Outputs in Fragmented MP4 or MPEG-TS format only.</p>
   *          </important>
   * 		       <p>If you specify a preset in
   *                 <code>PresetId</code> for which the value of <code>Container</code> is <code>fmp4</code> (Fragmented MP4) or
   *                 <code>ts</code> (MPEG-TS), <code>SegmentDuration</code> is the target maximum duration of
   *             each segment in seconds. For <code>HLSv3</code> format playlists,
   *             each media segment is stored in a separate <code>.ts</code> file. For <code>HLSv4</code>, <code>MPEG-DASH</code>, and <code>Smooth</code>
   *             playlists, all media segments for an output are stored in a single file. Each segment is approximately the length of
   *             the <code>SegmentDuration</code>, though individual segments might be shorter or longer.</p>
   *
   *             <p>The range of valid values is 1 to 60 seconds. If the duration
   *             of the video is not evenly divisible by <code>SegmentDuration</code>, the duration of
   *             the last segment is the remainder of total length/SegmentDuration.</p>
   *             <p>Elastic Transcoder
   *             creates an output-specific playlist for each output <code>HLS</code> output that you specify in OutputKeys. To
   *             add an output to the master playlist for this job, include it in the <code>OutputKeys</code> of
   *             the associated playlist.</p>
   * @public
   */
  SegmentDuration?: string | undefined;

  /**
   * <p> The status of one output in a job. If you specified only one output for the job,
   *                 <code>Outputs:Status</code> is always the same as <code>Job:Status</code>. If you
   *             specified more than one output: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>Job:Status</code> and <code>Outputs:Status</code> for all of the outputs
   *                     is Submitted until Elastic Transcoder starts to process the first output.</p>
   *             </li>
   *             <li>
   *                <p>When Elastic Transcoder starts to process the first output,
   *                         <code>Outputs:Status</code> for that output and <code>Job:Status</code> both
   *                     change to Progressing. For each output, the value of <code>Outputs:Status</code>
   *                     remains Submitted until Elastic Transcoder starts to process the output.</p>
   *             </li>
   *             <li>
   *                <p>Job:Status remains Progressing until all of the outputs reach a terminal status,
   *                     either Complete or Error.</p>
   *             </li>
   *             <li>
   *                <p>When all of the outputs reach a terminal status, <code>Job:Status</code> changes
   *                     to Complete only if <code>Outputs:Status</code> for all of the outputs is
   *                         <code>Complete</code>. If <code>Outputs:Status</code> for one or more
   *                     outputs is <code>Error</code>, the terminal status for <code>Job:Status</code>
   *                     is also <code>Error</code>.</p>
   *             </li>
   *          </ul>
   * 			      <p>The value of <code>Status</code> is one of the following: <code>Submitted</code>,
   *                 <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or
   *                 <code>Error</code>. </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Information that further explains <code>Status</code>.</p>
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * <p>Duration of the output file, in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>Specifies the width of the output file in pixels.</p>
   * @public
   */
  Width?: number | undefined;

  /**
   * <p>Height of the output file, in pixels.</p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>Frame rate of the output file, in frames per second.</p>
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * <p>File size of the output file, in bytes.</p>
   * @public
   */
  FileSize?: number | undefined;

  /**
   * <p>Duration of the output file, in milliseconds.</p>
   * @public
   */
  DurationMillis?: number | undefined;

  /**
   * <p>Information about the watermarks that you want Elastic Transcoder to add to the video during
   *             transcoding. You can specify up to four watermarks for each output. Settings for each
   *             watermark must be defined in the preset that you specify in <code>Preset</code> for the
   *             current output.</p>
   *         <p>Watermarks are added to the output video in the sequence in which you list them
   *             in the job output—the first watermark in the list is added to the output video first,
   *             the second watermark in the list is added next, and so on. As a result, if the settings
   *             in a preset cause Elastic Transcoder to place all watermarks in the same location, the second watermark
   *             that you add covers the first one, the third one covers the second, and the
   *             fourth one covers the third.</p>
   * @public
   */
  Watermarks?: JobWatermark[] | undefined;

  /**
   * <p>The album art to be associated with the output file, if any.</p>
   * @public
   */
  AlbumArt?: JobAlbumArt | undefined;

  /**
   * <p>You can create an output file that contains an excerpt from the input file. This excerpt, called
   *             a clip, can come from the beginning, middle, or end of the file. The Composition object contains settings
   *             for the clips that make up an output file. For the current release, you can only specify settings for a
   *             single clip per output file. The Composition object cannot be null.</p>
   *
   * @deprecated
   * @public
   */
  Composition?: Clip[] | undefined;

  /**
   * <p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another.
   *           All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Embedded:</b> Embedded captions
   *             are included in the same file as the audio and video. Elastic Transcoder supports
   *             only one embedded caption per language, to a maximum of 300 embedded captions per file.</p>
   *                <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only),
   *                <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code>
   *                </p>
   *                <p>Valid outputs include: <code>mov-text</code>
   *                </p>
   *                <p>Elastic Transcoder supports a maximum of one embedded format per output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Sidecar:</b> Sidecar captions are kept in a
   *             separate metadata file from the audio and video data.  Sidecar captions require a player
   *             that is capable of understanding the relationship between the video file and the sidecar
   *             file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar
   *             captions per file.</p>
   *                <p>Valid input values include: <code>dfxp</code> (first div element only),
   *                <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>,
   *                <code>ttml</code> (first div element only), and <code>webvtt</code>
   *                </p>
   *                <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>,
   *                <code>srt</code>, and <code>webvtt</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p>
   *          <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures
   *              as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does
   *              not preserve text formatting (for example, italics) during the transcoding process.</p>
   *              <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through
   *              existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>,
   *              and pass in a null <code>CaptionSources</code> array.</p>
   *          <p>For more information on embedded files, see the Subtitles Wikipedia page.</p>
   *          <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>
   * @public
   */
  Captions?: Captions | undefined;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your output files.
   *             If you choose to use encryption, you must specify a mode to use. If you choose not to
   *             use encryption, Elastic Transcoder writes an unencrypted file to your Amazon S3 bucket.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p>If Elastic Transcoder used a preset with a <code>ColorSpaceConversionMode</code> to transcode the output
   *       file, the <code>AppliedColorSpaceConversion</code> parameter shows the conversion used. If no
   *       <code>ColorSpaceConversionMode</code> was defined in the preset, this parameter is not be
   *       included in the job response.</p>
   * @public
   */
  AppliedColorSpaceConversion?: string | undefined;
}

/**
 * <p> Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container
 *             is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists
 *             contains information about the master playlists
 *             that you want Elastic Transcoder to create. We recommend that you create only one master
 *             playlist per output format. The maximum number of master playlists in a job is 30. </p>
 * @public
 */
export interface Playlist {
  /**
   * <p>The name that you want Elastic Transcoder to assign to the master playlist, for example,
   *             nyc-vacation.m3u8. If the name includes a <code>/</code> character, the
   *             section of the name before the last <code>/</code> must be identical for all
   *             <code>Name</code> objects. If you create more than one
   *             master playlist, the values of all <code>Name</code> objects must be
   *             unique.</p>
   *         <note>
   *             <p>Elastic Transcoder automatically appends the relevant file extension to the file name (<code>.m3u8</code>
   *     for <code>HLSv3</code> and <code>HLSv4</code> playlists, and
   *     <code>.ism</code> and <code>.ismc</code> for <code>Smooth</code> playlists).
   *     If you include a file extension in <code>Name</code>, the file name will have
   *     two extensions.</p>
   *          </note>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The format of the output playlist. Valid formats include <code>HLSv3</code>, <code>HLSv4</code>,
   * and <code>Smooth</code>.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>For each output in this job that you want to include in a master playlist, the value of the Outputs:Key object.</p>
   *          <ul>
   *             <li>
   *                <p>If your output is not <code>HLS</code> or does not have a segment duration set,
   *             the name of the output file is a concatenation of <code>OutputKeyPrefix</code>
   *             and <code>Outputs:Key</code>:</p>
   *                <p>OutputKeyPrefix<code>Outputs:Key</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If your output is <code>HLSv3</code> and has a segment duration set, or is not included in a
   *             playlist, Elastic Transcoder creates an output playlist file with a file extension of <code>.m3u8</code>, and a
   *             series of <code>.ts</code> files that include a five-digit
   *             sequential counter beginning with 00000:</p>
   *                <p>OutputKeyPrefix<code>Outputs:Key</code>.m3u8</p>
   *                <p>OutputKeyPrefix<code>Outputs:Key</code>00000.ts</p>
   *             </li>
   *             <li>
   *                <p>If your output is <code>HLSv4</code>, has a segment duration set, and is included in an
   *             <code>HLSv4</code> playlist, Elastic Transcoder creates an output playlist file with a file extension
   *             of <code>_v4.m3u8</code>. If the output is video, Elastic Transcoder also creates an output file with
   *             an extension of <code>_iframe.m3u8</code>:</p>
   *                <p>OutputKeyPrefix<code>Outputs:Key</code>_v4.m3u8</p>
   *                <p>OutputKeyPrefix<code>Outputs:Key</code>_iframe.m3u8</p>
   *                <p>OutputKeyPrefix<code>Outputs:Key</code>.ts</p>
   *             </li>
   *          </ul>
   *
   *          <p>Elastic Transcoder automatically appends the relevant file extension to the file name. If you include a file
   *     extension in Output Key, the file name will have two extensions.</p>
   *          <p>If you include more than one output in a playlist,
   *     any segment duration settings, clip settings, or caption settings must be the
   *     same for all outputs in the playlist. For <code>Smooth</code> playlists, the <code>Audio:Profile</code>,
   *     <code>Video:Profile</code>, and <code>Video:FrameRate</code> to
   *     <code>Video:KeyframesMaxDist</code> ratio must be the same for all outputs.</p>
   * @public
   */
  OutputKeys?: string[] | undefined;

  /**
   * <p>The HLS content protection settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p>
   * @public
   */
  HlsContentProtection?: HlsContentProtection | undefined;

  /**
   * <p>The DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p>
   * @public
   */
  PlayReadyDrm?: PlayReadyDrm | undefined;

  /**
   * <p>The status of the job with which the playlist is associated.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Information that further explains the status.</p>
   * @public
   */
  StatusDetail?: string | undefined;
}

/**
 * <p>Details about the timing of a job.</p>
 * @public
 */
export interface Timing {
  /**
   * <p>The time the job was submitted to Elastic Transcoder, in epoch milliseconds.</p>
   * @public
   */
  SubmitTimeMillis?: number | undefined;

  /**
   * <p>The time the job began transcoding, in epoch milliseconds.</p>
   * @public
   */
  StartTimeMillis?: number | undefined;

  /**
   * <p>The time the job finished transcoding, in epoch milliseconds.</p>
   * @public
   */
  FinishTimeMillis?: number | undefined;
}

/**
 * <p>A section of the response body that provides information about the job that is created.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The identifier that Elastic Transcoder assigned to the job. You use this value to get settings for the job or to delete the job.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The
   *             pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the
   *             files to transcode and the bucket into which Elastic Transcoder puts the transcoded files. </p>
   * @public
   */
  PipelineId?: string | undefined;

  /**
   * <p>A section of the request or response body that provides information about the file that is being transcoded.</p>
   * @public
   */
  Input?: JobInput | undefined;

  /**
   * <p>Information about the files that you're transcoding. If you specified multiple files for this
   *             job, Elastic Transcoder stitches the files together to make one output.</p>
   * @public
   */
  Inputs?: JobInput[] | undefined;

  /**
   * <p>If you specified one output for a job, information about that output. If you
   * 		specified multiple outputs for a job, the Output object lists information about the first
   * 		output. This duplicates the information that is listed for the first output in the Outputs object.</p>
   *          <important>
   *             <p>Outputs recommended instead.</p>
   *          </important>
   * 		       <p>A section of the request or response
   *             body that provides information about the transcoded (target) file. </p>
   * @public
   */
  Output?: JobOutput | undefined;

  /**
   * <p>Information about the output files. We recommend that you use the <code>Outputs</code>
   *             syntax for all jobs, even when you want Elastic Transcoder to transcode a file into only
   *             one format. Do not use both the <code>Outputs</code> and <code>Output</code> syntaxes in
   *             the same request. You can create a maximum of 30 outputs per job. </p>
   *         <p>If you specify more than one output for a job, Elastic Transcoder creates the files for each output
   *             in the order in which you specify them in the job.</p>
   * @public
   */
  Outputs?: JobOutput[] | undefined;

  /**
   * <p>The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job
   *             creates, including output files, thumbnails, and playlists. We recommend that you add a
   *             / or some other delimiter to the end of the <code>OutputKeyPrefix</code>.</p>
   * @public
   */
  OutputKeyPrefix?: string | undefined;

  /**
   * <important>
   *             <p>Outputs in Fragmented MP4 or MPEG-TS format only.</p>
   *          </important>
   * 		       <p>If you specify a preset in
   *                 <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS),
   *                 <code>Playlists</code> contains information about the master playlists that you want
   *             Elastic Transcoder to create.</p>
   *         <p>The maximum number of master playlists in a job is 30.</p>
   * @public
   */
  Playlists?: Playlist[] | undefined;

  /**
   * <p> The status of the job: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>,
   *                 <code>Canceled</code>, or <code>Error</code>. </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in
   *             <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job.
   *             Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same
   *             order in which you specify them.</p>
   *             <p>Metadata <code>keys</code> and <code>values</code> must use characters from the following list:</p>
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>0-9</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>A-Z</code> and <code>a-z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Space</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The following symbols: <code>_.:/=+-%@</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;

  /**
   * <p>Details about the timing of a job.</p>
   * @public
   */
  Timing?: Timing | undefined;
}

/**
 * <p>The CreateJobResponse structure.</p>
 * @public
 */
export interface CreateJobResponse {
  /**
   * <p>A section of the response body that provides information about the job that is created.</p>
   * @public
   */
  Job?: Job | undefined;
}

/**
 * <p>Too many operations for a given AWS account. For example, the number of pipelines
 *             exceeds the maximum allowed.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The <code>Permission</code> structure.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>The type of value that appears in the Grantee object:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>Canonical</code>: Either the canonical user ID for an AWS account or an
   *                     origin access identity for an Amazon CloudFront distribution.</p>
   * 					          <important>
   *                   <p>A
   *                         canonical user ID is not the same as an AWS account number.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Email</code>: The registered email address of an AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Group</code>: One of the following predefined Amazon S3 groups:
   *                         <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or
   *                         <code>LogDelivery</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GranteeType?: string | undefined;

  /**
   * <p>The AWS user or group that you want to have access to transcoded files and playlists. To
   *             identify the user or group, you can specify the canonical user ID for an AWS account, an origin
   *             access identity for a CloudFront distribution, the registered email address of an AWS account,
   *             or a predefined Amazon S3 group.</p>
   * @public
   */
  Grantee?: string | undefined;

  /**
   * <p> The permission that you want to give to the AWS user that is listed in Grantee. Valid
   *             values include: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code>: The grantee can read the thumbnails and metadata for
   *                     thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails that
   *                     Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails that
   *                     Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FULL_CONTROL</code>: The grantee has READ, READ_ACP, and WRITE_ACP
   *                     permissions for the thumbnails that Elastic Transcoder adds to the Amazon S3
   *                     bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Access?: string[] | undefined;
}

/**
 * <p>The <code>PipelineOutputConfig</code> structure.</p>
 * @public
 */
export interface PipelineOutputConfig {
  /**
   * <p> The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. Specify this
   *             value when all of the following are true:</p>
   * 			      <ul>
   *             <li>
   *                <p>You want to save transcoded files, thumbnails (if any), and playlists (if any)
   *                     together in one bucket.</p>
   *             </li>
   *             <li>
   *                <p>You do not want to specify the users or groups who have access to the transcoded
   *                     files, thumbnails, and playlists.</p>
   *             </li>
   *             <li>
   *                <p>You do not want to specify the permissions that Elastic Transcoder grants to the files.</p>
   *             </li>
   *             <li>
   *                <p>You want to associate the transcoded files and thumbnails with the Amazon S3
   *                     Standard storage class.</p>
   *             </li>
   *          </ul>
   * 			      <p>If you want to save transcoded files and playlists in one bucket and thumbnails in
   *             another bucket, specify which users can access the transcoded files or the permissions
   *             the users have, or change the Amazon S3 storage class, omit OutputBucket and specify
   *             values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead. </p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p> The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>,
   *             that you want Elastic Transcoder to assign to the video files and playlists that it stores in your
   *             Amazon S3 bucket. </p>
   * @public
   */
  StorageClass?: string | undefined;

  /**
   * <p>Optional. The <code>Permissions</code> object specifies which users and/or predefined
   *             Amazon S3 groups you want to have access to transcoded files and playlists, and the type
   *             of access you want them to have. You can grant permissions to a maximum of 30 users
   *             and/or predefined Amazon S3 groups.</p>
   *         <p>If you include <code>Permissions</code>, Elastic Transcoder grants only the permissions that you
   *             specify. It does not grant full permissions to the owner of the role specified by
   *                 <code>Role</code>. If you want that user to have full control, you must explicitly
   *             grant full control to the user.</p>
   *         <p> If you omit <code>Permissions</code>, Elastic Transcoder grants full control over the transcoded files
   *             and playlists to the owner of the role specified by <code>Role</code>, and grants no
   *             other permissions to any other user or group.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p>
 *         <important>
 *             <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p>
 *          </important>
 * @public
 */
export interface Notifications {
  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.</p>
   * @public
   */
  Progressing?: string | undefined;

  /**
   * <p>The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.</p>
   * @public
   */
  Completed?: string | undefined;

  /**
   * <p>The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.</p>
   * @public
   */
  Warning?: string | undefined;

  /**
   * <p>The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.</p>
   * @public
   */
  Error?: string | undefined;
}

/**
 * <p>The <code>CreatePipelineRequest</code> structure.</p>
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * <p>The name of the pipeline. We recommend that the name be unique within the AWS account,
   *             but uniqueness is not enforced.</p>
   *         <p>Constraints: Maximum 40 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon S3 bucket in which you saved the media files that you want to transcode.</p>
   * @public
   */
  InputBucket: string | undefined;

  /**
   * <p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use
   * 		  this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p>
   *         <p>Specify this value when all of the following are true:</p>
   * 		       <ul>
   *             <li>
   *                <p>You want to save transcoded files, thumbnails (if any), and playlists (if any)
   *                     together in one bucket.</p>
   *             </li>
   *             <li>
   *                <p>You do not want to specify the users or groups who have access to the transcoded
   *                     files, thumbnails, and playlists.</p>
   *             </li>
   *             <li>
   *                <p>You do not want to specify the permissions that Elastic Transcoder grants to the
   *
   *                     files. </p>
   * 				           <important>
   *                   <p>When Elastic Transcoder saves files in
   *                             <code>OutputBucket</code>, it grants full control over the files only to
   *                         the AWS account that owns the role that is specified by
   *                         <code>Role</code>.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>You want to associate the transcoded files and thumbnails with the Amazon S3
   *                     Standard storage class.</p>
   *             </li>
   *          </ul>
   *
   *         <p>If you want to save transcoded files and playlists in one bucket and thumbnails in
   *             another bucket, specify which users can access the transcoded files or the permissions
   *             the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code>
   *             and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>
   *             instead.</p>
   * @public
   */
  OutputBucket?: string | undefined;

  /**
   * <p>The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p>
   *         <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your
   *             <code>Encryption:Mode</code>, you don't need to provide a key with
   *             your job because a default key, known as an AWS-KMS key, is created for you automatically.
   *             You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are
   *             using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>,
   *             or <code>aes-gcm</code>.</p>
   * @public
   */
  AwsKmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p>
   *         <important>
   *             <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p>
   *          </important>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to
   *                 notify when Elastic Transcoder has started to process a job in this pipeline. This is the ARN that
   *                 Amazon SNS returned when you created the topic. For more information, see Create a
   *                 Topic in the Amazon Simple Notification Service Developer Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when
   *                 Elastic Transcoder has finished processing a job in this pipeline. This is the ARN that Amazon SNS
   *                 returned when you created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters a warning condition while processing a job in this pipeline. This is the
   *                 ARN that Amazon SNS returned when you created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters an error condition while processing a job in this pipeline. This is the
   *                 ARN that Amazon SNS returned when you created the topic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Notifications?: Notifications | undefined;

  /**
   * <p>The optional <code>ContentConfig</code> object specifies information about the Amazon S3
   *             bucket in which you want Elastic Transcoder to save transcoded files and playlists:
   *             which bucket to use, which users you want to have access to the files, the type of
   *             access you want users to have, and the storage class that you want to assign to the
   *             files.</p>
   *         <p>If you specify values for <code>ContentConfig</code>, you must also specify values for
   *                 <code>ThumbnailConfig</code>.</p>
   *         <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>,
   *             omit the <code>OutputBucket</code> object.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save
   *                 transcoded files and playlists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Permissions</b> (Optional): The Permissions object specifies which users you want
   *                 to have access to transcoded files and the type of access you want them to have. You
   *                 can grant permissions to a maximum of 30 users and/or predefined Amazon S3
   *                 groups.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Grantee Type</b>: Specify the type of value that appears in the
   *                     <code>Grantee</code> object: </p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <b>Canonical</b>: The value in the <code>Grantee</code> object is either the
   *                         canonical user ID for an AWS account or an origin access identity for an
   *                         Amazon CloudFront distribution. For more information about canonical user
   *                         IDs, see Access Control List (ACL) Overview in the Amazon Simple Storage
   *                         Service Developer Guide. For more information about using CloudFront origin
   *                         access identities to require that users use CloudFront URLs instead of
   *                         Amazon S3 URLs, see Using an Origin Access Identity to Restrict Access to
   *                         Your Amazon S3 Content.</p>
   * 						               <important>
   *                         <p>A canonical user ID is not the same as an
   *                             AWS account number.</p>
   *                      </important>
   *                     </li>
   *                   <li>
   *                      <p>
   *                         <b>Email</b>: The value in the <code>Grantee</code> object is the registered
   *                         email address of an AWS account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Group</b>: The value in the <code>Grantee</code> object is one of the
   *                         following predefined Amazon S3 groups: <code>AllUsers</code>,
   *                             <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Grantee</b>: The AWS user or group that you want to have access to transcoded
   *                 files and playlists. To identify the user or group, you can specify the canonical
   *                 user ID for an AWS account, an origin access identity for a CloudFront distribution,
   *                 the registered email address of an AWS account, or a predefined Amazon S3 group </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Access</b>: The permission that you want to give to the AWS user that you
   *                 specified in <code>Grantee</code>. Permissions are granted on the files that Elastic
   *                 Transcoder adds to the bucket, including playlists and video files. Valid values
   *                 include: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>READ</code>: The grantee can read the objects and metadata for objects
   *                         that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>READ_ACP</code>: The grantee can read the object ACL for objects that
   *                         Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WRITE_ACP</code>: The grantee can write the ACL for the objects that
   *                         Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FULL_CONTROL</code>: The grantee has <code>READ</code>,
   *                             <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the
   *                         objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or
   *                     <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to
   *                 the video files and playlists that it stores in your Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentConfig?: PipelineOutputConfig | undefined;

  /**
   * <p>The <code>ThumbnailConfig</code> object specifies several values, including the Amazon S3
   *             bucket in which you want Elastic Transcoder to save thumbnail files, which users you want to have
   *             access to the files, the type of access you want users to have, and the storage class
   *             that you want to assign to the files.</p>
   *         <p>If you specify values for <code>ContentConfig</code>, you must also specify values for
   *                 <code>ThumbnailConfig</code> even if you don't want to create thumbnails.</p>
   *         <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>,
   *             omit the <code>OutputBucket</code> object.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save
   *                 thumbnail files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Permissions</b> (Optional): The <code>Permissions</code> object specifies which
   *                 users and/or predefined Amazon S3 groups you want to have access to thumbnail files,
   *                 and the type of access you want them to have. You can grant permissions to a maximum
   *                 of 30 users and/or predefined Amazon S3 groups.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>GranteeType</b>: Specify the type of value that appears in the Grantee object: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Canonical</b>: The value in the <code>Grantee</code> object is either the
   *                         canonical user ID for an AWS account or an origin access identity for an
   *                         Amazon CloudFront distribution.</p>
   *                      <important>
   *                         <p>A canonical user ID is not the
   *                             same as an AWS account number.</p>
   *                      </important>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Email</b>: The value in the <code>Grantee</code> object is the registered
   *                         email address of an AWS account. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Group</b>: The value in the <code>Grantee</code> object is one of the
   *                         following predefined Amazon S3 groups: <code>AllUsers</code>,
   *                             <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Grantee</b>: The AWS user or group that you want to have access to thumbnail
   *                 files. To identify the user or group, you can specify the canonical user ID for an
   *                 AWS account, an origin access identity for a CloudFront distribution, the registered
   *                 email address of an AWS account, or a predefined Amazon S3 group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Access</b>: The permission that you want to give to the AWS user that you
   *                 specified in <code>Grantee</code>. Permissions are granted on the thumbnail files
   *                 that Elastic Transcoder adds to the bucket. Valid values include: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>READ</code>: The grantee can read the thumbnails and metadata for
   *                         objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails
   *                         that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails
   *                         that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FULL_CONTROL</code>: The grantee has <code>READ</code>,
   *                             <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the
   *                         thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or
   *                     <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to
   *                 the thumbnails that it stores in your Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ThumbnailConfig?: PipelineOutputConfig | undefined;
}

/**
 * <p>The pipeline (queue) that is used to manage jobs.</p>
 * @public
 */
export interface Pipeline {
  /**
   * <p>The identifier for the pipeline. You use this value to identify the pipeline in
   *             which you want to perform a variety of operations, such as creating a job or a preset.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the pipeline.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipeline. We recommend that the name be unique within the AWS account,
   *             but uniqueness is not enforced.</p>
   *         <p>Constraints: Maximum 40 characters</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current status of the pipeline:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code>: The pipeline is processing jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Paused</code>: The pipeline is not currently processing jobs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Amazon S3 bucket from which Elastic Transcoder gets media files for transcoding and the graphics
   *             files, if any, that you want to use for watermarks.</p>
   * @public
   */
  InputBucket?: string | undefined;

  /**
   * <p>The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files,
   *             thumbnails, and playlists. Either you specify this value, or you specify both
   *                 <code>ContentConfig</code> and <code>ThumbnailConfig</code>.</p>
   * @public
   */
  OutputBucket?: string | undefined;

  /**
   * <p>The IAM Amazon Resource Name (ARN) for the role that Elastic Transcoder uses to transcode jobs for this pipeline.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p>
   *         <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your
   *             <code>Encryption:Mode</code>, you don't need to provide a key with
   *             your job because a default key, known as an AWS-KMS key, is created for you automatically.
   *             You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are
   *             using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>,
   *             or <code>aes-gcm</code>.</p>
   * @public
   */
  AwsKmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p>
   *         <important>
   *             <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p>
   *          </important>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Progressing</b> (optional): The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify
   *                 when Elastic Transcoder has started to process the job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Complete</b> (optional): The Amazon SNS topic that you want to notify when Elastic Transcoder has
   *                 finished processing the job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Warning</b> (optional): The Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters a warning condition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Error</b> (optional): The Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters an error condition.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Notifications?: Notifications | undefined;

  /**
   * <p>Information about the Amazon S3 bucket in which you want Elastic Transcoder to save
   *             transcoded files and playlists. Either you specify both <code>ContentConfig</code> and
   *                 <code>ThumbnailConfig</code>, or you specify <code>OutputBucket</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save
   *                 transcoded files and playlists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Permissions</b>: A list of the users and/or predefined Amazon S3 groups you want
   *                 to have access to transcoded files and playlists, and the type of access that you
   *                 want them to have. </p>
   * 				           <ul>
   *                   <li>
   *                      <p>GranteeType: The type of value that appears in the <code>Grantee</code>
   *                         object: </p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>Canonical</code>: Either the canonical user ID for an AWS
   *                                 account or an origin access identity for an Amazon CloudFront
   *                                 distribution.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>Email</code>: The registered email address of an AWS
   *                                 account.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>Group</code>: One of the following predefined Amazon S3
   *                                 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or
   *                                     <code>LogDelivery</code>.</p>
   *                         </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                      <p>
   *                         <code>Grantee</code>: The AWS user or group that you want to have access to
   *                         transcoded files and playlists.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Access</code>: The permission that you want to give to the AWS user
   *                         that is listed in <code>Grantee</code>. Valid values include:</p>
   * 						               <ul>
   *                         <li>
   *                            <p>
   *                               <code>READ</code>: The grantee can read the objects and metadata for
   *                                 objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>READ_ACP</code>: The grantee can read the object ACL for
   *                                 objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>WRITE_ACP</code>: The grantee can write the ACL for the
   *                                 objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FULL_CONTROL</code>: The grantee has <code>READ</code>,
   *                                     <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions
   *                                 for the objects that Elastic Transcoder adds to the Amazon S3
   *                                 bucket.</p>
   *                         </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StorageClass</b>: The Amazon S3 storage class, Standard or ReducedRedundancy,
   *                 that you want Elastic Transcoder to assign to the video files and playlists that it
   *                 stores in your Amazon S3 bucket. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentConfig?: PipelineOutputConfig | undefined;

  /**
   * <p>Information about the Amazon S3 bucket in which you want Elastic Transcoder to save
   *             thumbnail files. Either you specify both <code>ContentConfig</code> and
   *                 <code>ThumbnailConfig</code>, or you specify <code>OutputBucket</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Bucket</code>: The Amazon S3 bucket in which you want Elastic Transcoder to
   *                 save thumbnail files. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Permissions</code>: A list of the users and/or predefined Amazon S3 groups you
   *                 want to have access to thumbnail files, and the type of access that you want them to
   *                 have. </p>
   * 				           <ul>
   *                   <li>
   *                      <p>GranteeType: The type of value that appears in the Grantee object:</p>
   * 					                <ul>
   *                         <li>
   *                            <p>
   *                               <code>Canonical</code>: Either the canonical user ID for an AWS
   *                                 account or an origin access identity for an Amazon CloudFront
   *                                 distribution.</p>
   *                            <important>
   *                               <p>A canonical user ID is not the same as an
   *                                     AWS account number.</p>
   *                            </important>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>Email</code>: The registered email address of an AWS
   *                                 account.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>Group</code>: One of the following predefined Amazon S3
   *                                 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or
   *                                     <code>LogDelivery</code>.</p>
   *                         </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                      <p>
   *                         <code>Grantee</code>: The AWS user or group that you want to have access to
   *                         thumbnail files.</p>
   *                   </li>
   *                   <li>
   *                      <p>Access: The permission that you want to give to the AWS user that is listed
   *                         in Grantee. Valid values include: </p>
   * 						               <ul>
   *                         <li>
   *                            <p>
   *                               <code>READ</code>: The grantee can read the thumbnails and metadata
   *                                 for thumbnails that Elastic Transcoder adds to the Amazon S3
   *                                 bucket.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>READ_ACP</code>: The grantee can read the object ACL for
   *                                 thumbnails that Elastic Transcoder adds to the Amazon S3
   *                                 bucket.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>WRITE_ACP</code>: The grantee can write the ACL for the
   *                                 thumbnails that Elastic Transcoder adds to the Amazon S3
   *                                 bucket.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FULL_CONTROL</code>: The grantee has READ, READ_ACP, and
   *                                 WRITE_ACP permissions for the thumbnails that Elastic Transcoder
   *                                 adds to the Amazon S3 bucket.</p>
   *                         </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StorageClass</code>: The Amazon S3 storage class, <code>Standard</code> or
   *                     <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to
   *                 the thumbnails that it stores in your Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ThumbnailConfig?: PipelineOutputConfig | undefined;
}

/**
 * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region
 *             as the pipeline.</p>
 *         <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics,
 *             and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
 * @public
 */
export interface Warning {
  /**
   * <p>The code of the cross-regional warning.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The message explaining what resources are in a different region from the pipeline.</p>
   *         <note>
   *             <p>AWS KMS keys must be in the same region as the pipeline.</p>
   *          </note>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * <p>A section of the response body that provides information about the pipeline that is created.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;

  /**
   * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as
   *             the pipeline.</p>
   *         <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and
   *             AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;
}

/**
 * <p>Thumbnails for videos.</p>
 * @public
 */
export interface Thumbnails {
  /**
   * <p>The format of thumbnails, if any. Valid values are <code>jpg</code> and <code>png</code>. </p>
   *         <p>You specify whether you want Elastic Transcoder to create thumbnails when you create a job.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The approximate number of seconds between thumbnails. Specify an integer value.</p>
   * @public
   */
  Interval?: string | undefined;

  /**
   * <important>
   *             <p>To better control resolution and aspect ratio of thumbnails, we recommend that you
   *                 use the values <code>MaxWidth</code>, <code>MaxHeight</code>,
   *                     <code>SizingPolicy</code>, and <code>PaddingPolicy</code> instead of
   *                     <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings
   *                 are mutually exclusive. Do not use them together.</p>
   *         </important>
   *         <p>The width and height of thumbnail files in pixels. Specify a value in the format
   *                     <code>
   *                <i>width</i>
   *             </code> x <code>
   *                <i>height</i>
   *             </code> where both values are
   *             even integers. The values cannot exceed the width and height that you specified in the
   *                 <code>Video:Resolution</code> object.</p>
   * @public
   */
  Resolution?: string | undefined;

  /**
   * <important>
   *             <p>To better control resolution and aspect ratio of thumbnails, we recommend that you
   *                 use the values <code>MaxWidth</code>, <code>MaxHeight</code>,
   *                     <code>SizingPolicy</code>, and <code>PaddingPolicy</code> instead of
   *                     <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings
   *                 are mutually exclusive. Do not use them together.</p>
   *         </important>
   *         <p>The aspect ratio of thumbnails. Valid values include:</p>
   *         <p>
   *             <code>auto</code>, <code>1:1</code>, <code>4:3</code>, <code>3:2</code>,
   *                 <code>16:9</code>
   *          </p>
   *         <p>If you specify <code>auto</code>, Elastic Transcoder tries to preserve the aspect ratio of the video in
   *             the output file.</p>
   * @public
   */
  AspectRatio?: string | undefined;

  /**
   * <p>The maximum width of thumbnails in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD)
   *             as the default value. If you specify a numeric value, enter an even integer between 32 and 4096.</p>
   * @public
   */
  MaxWidth?: string | undefined;

  /**
   * <p>The maximum height of thumbnails in pixels. If you specify auto, Elastic Transcoder uses 1080
   *             (Full HD) as the default value. If you specify a numeric value, enter an even integer
   *             between 32 and 3072.</p>
   * @public
   */
  MaxHeight?: string | undefined;

  /**
   * <p>Specify one of the following values to control scaling of thumbnails:</p>
   *
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>Fit</code>: Elastic Transcoder scales thumbnails so they match the value
   *                     that you specified in thumbnail MaxWidth or MaxHeight settings without exceeding
   *                     the other value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fill</code>: Elastic Transcoder scales thumbnails so they match the value
   *                     that you specified in thumbnail <code>MaxWidth</code> or <code>MaxHeight</code>
   *                     settings and matches or exceeds the other value. Elastic Transcoder centers the
   *                     image in thumbnails and then crops in the dimension (if any) that exceeds the
   *                     maximum value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stretch</code>: Elastic Transcoder stretches thumbnails to match the
   *                     values that you specified for thumbnail <code>MaxWidth</code> and
   *                         <code>MaxHeight</code> settings. If the relative proportions of the input
   *                     video and thumbnails are different, the thumbnails will be distorted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Keep</code>: Elastic Transcoder does not scale thumbnails. If either
   *                     dimension of the input video exceeds the values that you specified for thumbnail
   *                         <code>MaxWidth</code> and <code>MaxHeight</code> settings, Elastic
   *                     Transcoder crops the thumbnails.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShrinkToFit</code>: Elastic Transcoder scales thumbnails down so that
   *                     their dimensions match the values that you specified for at least one of
   *                     thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding
   *                     either value. If you specify this option, Elastic Transcoder does not scale
   *                     thumbnails up.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShrinkToFill</code>: Elastic Transcoder scales thumbnails down so that
   *                     their dimensions match the values that you specified for at least one of
   *                         <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below
   *                     either value. If you specify this option, Elastic Transcoder does not scale
   *                     thumbnails up.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SizingPolicy?: string | undefined;

  /**
   * <p>When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add
   *             black bars to the top and bottom and/or left and right sides of thumbnails to make the
   *             total size of the thumbnails match the values that you specified for thumbnail
   *                 <code>MaxWidth</code> and <code>MaxHeight</code> settings.</p>
   * @public
   */
  PaddingPolicy?: string | undefined;
}

/**
 * <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to
 *             overlay over videos that are transcoded using this preset. You can specify settings
 *             for up to four watermarks. Watermarks appear in the specified size and location, and
 *             with the specified opacity for the duration of the transcoded video.</p>
 *         <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that
 *             is not rectangular, use the .png format, which supports transparency.</p>
 *         <p>When you create a job that uses this preset, you specify the .png or .jpg graphics
 *             that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics
 *             in the job than you specify watermark settings in the preset, which allows you to use
 *             the same preset for up to four watermarks that have different dimensions.</p>
 * @public
 */
export interface PresetWatermark {
  /**
   * <p> A unique identifier for the settings for one
   *         watermark. The value of <code>Id</code> can be up to 40 characters long. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The maximum width of the watermark in one of the following formats: </p>
   * 		       <ul>
   *             <li>
   *                <p>number of pixels (px): The minimum value is 16 pixels, and the maximum value is
   *                     the value of <code>MaxWidth</code>.</p>
   *             </li>
   *             <li>
   *                <p>integer percentage (%): The range of valid values is 0 to 100. Use the value of
   *                         <code>Target</code> to specify whether you want Elastic Transcoder to include the black
   *                     bars that are added by Elastic Transcoder, if any, in the calculation.</p>
   * 					          <p>If
   *                 you specify the value in pixels, it must be less than or equal to the value of
   *                     <code>MaxWidth</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxWidth?: string | undefined;

  /**
   * <p>The maximum height of the watermark in one of the following formats: </p>
   * 		       <ul>
   *             <li>
   *                <p>number of pixels (px): The minimum value is 16 pixels, and the maximum value is
   *                     the value of <code>MaxHeight</code>.</p>
   *             </li>
   *             <li>
   *                <p>integer percentage (%): The range of valid values is 0 to 100. Use the value of
   *                         <code>Target</code> to specify whether you want Elastic Transcoder to include the black
   *                     bars that are added by Elastic Transcoder, if any, in the calculation.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify the value in pixels, it must be less than or equal to the value of
   *                 <code>MaxHeight</code>.</p>
   * @public
   */
  MaxHeight?: string | undefined;

  /**
   * <p>A value that controls scaling of the watermark: </p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>Fit</b>: Elastic Transcoder scales the watermark so it matches the value that
   *                     you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without
   *                     exceeding the other value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Stretch</b>: Elastic Transcoder stretches the watermark to match the values
   *                     that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the
   *                     relative proportions of the watermark and the values of <code>MaxWidth</code>
   *                     and <code>MaxHeight</code> are different, the watermark will be distorted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ShrinkToFit</b>: Elastic Transcoder scales the watermark down so that its
   *                     dimensions match the values that you specified for at least one of
   *                         <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either
   *                     value. If you specify this option, Elastic Transcoder does not scale the
   *                     watermark up.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SizingPolicy?: string | undefined;

  /**
   * <p>The horizontal position of the watermark unless you specify a non-zero value for
   *                 <code>HorizontalOffset</code>: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <b>Left</b>: The left edge of the watermark is aligned with the left border of
   *                     the video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Right</b>: The right edge of the watermark is aligned with the right border
   *                     of the video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Center</b>: The watermark is centered between the left and right
   *                     borders.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HorizontalAlign?: string | undefined;

  /**
   * <p>The amount by which you want the horizontal position of the watermark to be offset from
   *             the position specified by HorizontalAlign: </p>
   * 			      <ul>
   *             <li>
   *                <p>number of pixels (px): The minimum value is 0 pixels, and the maximum value is
   *                     the value of MaxWidth.</p>
   *             </li>
   *             <li>
   *                <p>integer percentage (%): The range of valid values is 0 to 100.</p>
   *             </li>
   *          </ul>
   * 			      <p>For example, if you specify Left for <code>HorizontalAlign</code> and 5px for
   *                 <code>HorizontalOffset</code>, the left side of the watermark appears 5 pixels from
   *             the left border of the output video.</p>
   *         <p>
   *             <code>HorizontalOffset</code> is only valid when the value of
   *                 <code>HorizontalAlign</code> is <code>Left</code> or <code>Right</code>. If you
   *             specify an offset that causes the watermark to extend beyond the left or right border
   *             and Elastic Transcoder has not added black bars, the watermark is cropped. If Elastic
   *             Transcoder has added black bars, the watermark extends into the black bars. If the
   *             watermark extends beyond the black bars, it is cropped.</p>
   *         <p>Use the value of <code>Target</code> to specify whether you want to include the black
   *             bars that are added by Elastic Transcoder, if any, in the offset calculation.</p>
   * @public
   */
  HorizontalOffset?: string | undefined;

  /**
   * <p>The vertical position of the watermark unless you specify a non-zero value for
   *                 <code>VerticalOffset</code>: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <b>Top</b>: The top edge of the watermark is aligned with the top border of the
   *                     video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Bottom</b>: The bottom edge of the watermark is aligned with the bottom
   *                     border of the video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Center</b>: The watermark is centered between the top and bottom
   *                     borders.</p>
   *             </li>
   *          </ul>
   * @public
   */
  VerticalAlign?: string | undefined;

  /**
   * <p>
   *             <code>VerticalOffset</code>
   *          </p>
   *         <p>The amount by which you want the vertical position of the watermark to be offset from the
   *             position specified by VerticalAlign:</p>
   * 			      <ul>
   *             <li>
   *                <p>number of pixels (px): The minimum value is 0 pixels, and the maximum value is
   *                     the value of <code>MaxHeight</code>.</p>
   *             </li>
   *             <li>
   *                <p>integer percentage (%): The range of valid values is 0 to 100.</p>
   *             </li>
   *          </ul>
   * 			      <p>For example, if you specify <code>Top</code> for <code>VerticalAlign</code> and
   *                 <code>5px</code> for <code>VerticalOffset</code>, the top of the watermark appears 5
   *             pixels from the top border of the output video.</p>
   *         <p>
   *             <code>VerticalOffset</code> is only valid when the value of VerticalAlign is Top or
   *             Bottom.</p>
   *         <p>If you specify an offset that causes the watermark to extend beyond the top or
   *             bottom border and Elastic Transcoder has not added black bars, the watermark is cropped. If Elastic Transcoder has
   *             added black bars, the watermark extends into the black bars. If the watermark extends
   *             beyond the black bars, it is cropped.</p>
   *
   *         <p>Use the value of <code>Target</code> to specify whether you want Elastic Transcoder to
   *             include the black bars that are added by Elastic Transcoder, if any, in the offset
   *             calculation.</p>
   * @public
   */
  VerticalOffset?: string | undefined;

  /**
   * <p>A percentage that indicates how much you want a watermark to obscure the video in the
   *             location where it appears. Valid values are 0 (the watermark is invisible) to 100 (the
   *             watermark completely obscures the video in the specified location). The datatype of
   *                 <code>Opacity</code> is float.</p>
   *         <p>Elastic Transcoder supports transparent .png graphics. If you use a transparent .png, the transparent
   *             portion of the video appears as if you had specified a value of 0 for
   *                 <code>Opacity</code>. The .jpg file format doesn't support transparency.</p>
   * @public
   */
  Opacity?: string | undefined;

  /**
   * <p>A value that determines how Elastic Transcoder interprets values that you specified for
   *                 <code>HorizontalOffset</code>, <code>VerticalOffset</code>, <code>MaxWidth</code>,
   *             and <code>MaxHeight</code>:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>Content</b>: <code>HorizontalOffset</code> and
   *                         <code>VerticalOffset</code> values are calculated based on the borders of
   *                     the video excluding black bars added by Elastic Transcoder, if any. In addition,
   *                         <code>MaxWidth</code> and <code>MaxHeight</code>, if specified as a
   *                     percentage, are calculated based on the borders of the video excluding black
   *                     bars added by Elastic Transcoder, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Frame</b>: <code>HorizontalOffset</code> and <code>VerticalOffset</code>
   *                     values are calculated based on the borders of the video including black bars
   *                     added by Elastic Transcoder, if any. In addition, <code>MaxWidth</code> and
   *                     <code>MaxHeight</code>, if specified as a percentage, are calculated based on
   *                 the borders of the video including black bars added by Elastic Transcoder, if any.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Target?: string | undefined;
}

/**
 * <p>The <code>VideoParameters</code> structure.</p>
 * @public
 */
export interface VideoParameters {
  /**
   * <p>The video codec for the output file. Valid values include <code>gif</code>,
   *                 <code>H.264</code>, <code>mpeg2</code>, <code>vp8</code>, and <code>vp9</code>.
   *                 You can only specify <code>vp8</code> and <code>vp9</code> when the container type is
   *                 <code>webm</code>, <code>gif</code> when the container type is <code>gif</code>,
   *                 and <code>mpeg2</code> when the container type is <code>mpg</code>.</p>
   * @public
   */
  Codec?: string | undefined;

  /**
   * <p>
   *             <b>Profile (H.264/VP8/VP9 Only)</b>
   *         </p>
   *         <p>The H.264 profile that you want to use for the output file. Elastic Transcoder supports the following profiles:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>baseline</code>: The profile most commonly used for videoconferencing and for
   *                 mobile applications.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>main</code>: The profile used for standard-definition digital TV
   *                 broadcasts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>high</code>: The profile used for high-definition digital TV broadcasts and
   *                 for Blu-ray discs.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Level (H.264 Only)</b>
   *         </p>
   *         <p>The H.264 level that you want to use for the output file. Elastic Transcoder supports the following levels:</p>
   *         <p>
   *             <code>1</code>, <code>1b</code>, <code>1.1</code>, <code>1.2</code>, <code>1.3</code>,
   *                 <code>2</code>, <code>2.1</code>, <code>2.2</code>, <code>3</code>,
   *             <code>3.1</code>, <code>3.2</code>, <code>4</code>, <code>4.1</code>
   *          </p>
   *         <p>
   *             <b>MaxReferenceFrames (H.264 Only)</b>
   *         </p>
   *         <p>Applicable only when the value of Video:Codec is H.264. The maximum number of
   *             previously decoded frames to use as a reference for decoding future frames. Valid
   *             values are integers 0 through 16, but we recommend that you not use a value greater
   *             than the following:</p>
   *         <p>
   *             <code>Min(Floor(Maximum decoded picture buffer in macroblocks * 256 / (Width in pixels *
   *                 Height in pixels)), 16)</code>
   *         </p>
   *         <p>where <i>Width in pixels</i> and <i>Height in pixels</i> represent either MaxWidth and
   *             MaxHeight, or Resolution. <i>Maximum decoded picture buffer in macroblocks</i> depends
   *             on the value of the <code>Level</code> object. See the list below. (A macroblock is a
   *             block of pixels measuring 16x16.) </p>
   *         <ul>
   *             <li>
   *                <p>1 - 396</p>
   *             </li>
   *             <li>
   *                <p>1b - 396</p>
   *             </li>
   *             <li>
   *                <p>1.1 - 900</p>
   *             </li>
   *             <li>
   *                <p>1.2 - 2376</p>
   *             </li>
   *             <li>
   *                <p>1.3 - 2376</p>
   *             </li>
   *             <li>
   *                <p>2 - 2376</p>
   *             </li>
   *             <li>
   *                <p>2.1 - 4752</p>
   *             </li>
   *             <li>
   *                <p>2.2 - 8100</p>
   *             </li>
   *             <li>
   *                <p>3 - 8100</p>
   *             </li>
   *             <li>
   *                <p>3.1 - 18000</p>
   *             </li>
   *             <li>
   *                <p>3.2 - 20480</p>
   *             </li>
   *             <li>
   *                <p>4 - 32768</p>
   *             </li>
   *             <li>
   *                <p>4.1 - 32768</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>MaxBitRate (Optional, H.264/MPEG2/VP8/VP9 only)</b>
   *         </p>
   *         <p>The maximum number of bits per second in a video buffer; the size of the buffer is
   *             specified by <code>BufferSize</code>. Specify a value between 16 and 62,500. You can
   *             reduce the bandwidth required to stream a video by reducing the maximum bit rate, but
   *             this also reduces the quality of the video.</p>
   *         <p>
   *             <b>BufferSize (Optional, H.264/MPEG2/VP8/VP9 only)</b>
   *         </p>
   *         <p>The maximum number of bits in any x seconds of the output video. This window is commonly
   *             10 seconds, the standard segment duration when you're using FMP4 or MPEG-TS for the container
   *             type of the output video. Specify an integer greater than 0. If you specify
   *                 <code>MaxBitRate</code> and omit <code>BufferSize</code>, Elastic Transcoder sets
   *                 <code>BufferSize</code> to 10 times the value of <code>MaxBitRate</code>.</p>
   *         <p>
   *             <b>InterlacedMode (Optional, H.264/MPEG2 Only)</b>
   *         </p>
   *         <p>The interlace mode for the output video.</p>
   *         <p>Interlaced video is used to double the perceived frame rate for a video by interlacing
   *             two fields (one field on every other line, the other field on the other lines) so that the
   *             human eye registers multiple pictures per frame. Interlacing reduces the bandwidth required
   *             for transmitting a video, but can result in blurred images and flickering.</p>
   *         <p>Valid values include <code>Progressive</code> (no interlacing, top to bottom),
   *             <code>TopFirst</code> (top field first), <code>BottomFirst</code> (bottom field
   *             first), and <code>Auto</code>.</p>
   *         <p>If <code>InterlaceMode</code> is not specified, Elastic Transcoder uses <code>Progressive</code> for the output. If
   *             <code>Auto</code> is specified, Elastic Transcoder interlaces the output.</p>
   *         <p>
   *             <b>ColorSpaceConversionMode (Optional, H.264/MPEG2 Only)</b>
   *         </p>
   *         <p>The color space conversion Elastic Transcoder applies to the output video. Color spaces are the algorithms
   *             used by the computer to store information about how to render color. <code>Bt.601</code> is the
   *             standard for standard definition video, while <code>Bt.709</code> is the standard for high definition
   *             video.</p>
   *         <p>Valid values include <code>None</code>,
   *             <code>Bt709toBt601</code>, <code>Bt601toBt709</code>, and <code>Auto</code>.</p>
   *         <p>If you chose <code>Auto</code> for <code>ColorSpaceConversionMode</code> and your output
   *             is interlaced, your frame rate is one of <code>23.97</code>, <code>24</code>,
   *             <code>25</code>, <code>29.97</code>, <code>50</code>, or <code>60</code>, your
   *             <code>SegmentDuration</code> is null, and you are using one of the resolution
   *             changes from the list below, Elastic Transcoder applies the following color space
   *             conversions:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <i>Standard to HD, 720x480 to 1920x1080</i> - Elastic Transcoder applies <code>Bt601ToBt709</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Standard to HD, 720x576 to 1920x1080</i> - Elastic Transcoder applies <code>Bt601ToBt709</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>HD to Standard, 1920x1080 to 720x480</i> - Elastic Transcoder applies <code>Bt709ToBt601</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>HD to Standard, 1920x1080 to 720x576</i> - Elastic Transcoder applies <code>Bt709ToBt601</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Elastic Transcoder may change the behavior of the <code>ColorspaceConversionMode</code>
   *                <code>Auto</code> mode in the future. All outputs in a playlist must use the same
   *             <code>ColorSpaceConversionMode</code>.</p>
   *          </note>
   *         <p>If you do not specify a <code>ColorSpaceConversionMode</code>, Elastic Transcoder does not change the
   *             color space of a file. If you are unsure what <code>ColorSpaceConversionMode</code> was applied to
   *             your output file, you can check the <code>AppliedColorSpaceConversion</code> parameter included in
   *             your job response. If your job does not have an <code>AppliedColorSpaceConversion</code> in its
   *             response, no <code>ColorSpaceConversionMode</code> was applied.</p>
   *          <p>
   *              <b>ChromaSubsampling</b>
   *          </p>
   *          <p>The sampling pattern for the chroma (color) channels of the output video.
   *              Valid values include <code>yuv420p</code> and <code>yuv422p</code>.</p>
   *          <p>
   *             <code>yuv420p</code> samples the chroma information of every other horizontal and every other vertical
   *              line, <code>yuv422p</code> samples the color information of every horizontal line and every other
   *              vertical line.</p>
   *
   *          <p>
   *              <b>LoopCount (Gif Only)</b>
   *          </p>
   *          <p>The number of times you want the output gif to loop. Valid values include <code>Infinite</code> and
   *              integers between <code>0</code> and <code>100</code>, inclusive.</p>
   * @public
   */
  CodecOptions?: Record<string, string> | undefined;

  /**
   * <p>Applicable only when the value of Video:Codec is one of <code>H.264</code>, <code>MPEG2</code>,
   *             or <code>VP8</code>.</p>
   *         <p>The maximum number of frames between key frames. Key frames are fully encoded frames;
   *             the frames between key frames are encoded based, in part, on the content of the key frames.
   *             The value is an integer formatted as a string; valid values are between 1 (every frame is a
   *             key frame) and 100000, inclusive. A higher value results in higher compression but may also
   *             discernibly decrease video quality.</p>
   *         <p>For <code>Smooth</code> outputs, the <code>FrameRate</code> must have a constant ratio to the
   *             <code>KeyframesMaxDist</code>. This allows <code>Smooth</code> playlists to switch between different quality levels
   *             while the file is being played.</p>
   *         <p>For example, an input file can have a <code>FrameRate</code> of
   *             30 with a <code>KeyframesMaxDist</code> of 90. The output file then needs to have a ratio of 1:3.
   *             Valid outputs would have <code>FrameRate</code> of 30, 25, and 10, and <code>KeyframesMaxDist</code>
   *             of 90, 75, and 30, respectively.</p>
   *         <p>Alternately, this can be achieved by setting <code>FrameRate</code>
   *             to auto and having the same values for <code>MaxFrameRate</code> and <code>KeyframesMaxDist</code>.</p>
   * @public
   */
  KeyframesMaxDist?: string | undefined;

  /**
   * <p>Applicable only when the value of Video:Codec is one of <code>H.264</code>, <code>MPEG2</code>,
   *             or <code>VP8</code>.</p>
   *         <p>Whether to use a fixed value for <code>FixedGOP</code>. Valid values are
   *                 <code>true</code> and <code>false</code>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>true</code>: Elastic Transcoder uses the value of <code>KeyframesMaxDist</code> for the
   *                 distance between key frames (the number of frames in a group of pictures, or
   *                 GOP).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code>: The distance between key frames can vary.</p>
   *             </li>
   *          </ul>
   *         <important>
   *             <p>
   *                <code>FixedGOP</code> must be set to <code>true</code> for <code>fmp4</code> containers.</p>
   *          </important>
   * @public
   */
  FixedGOP?: string | undefined;

  /**
   * <p>The bit rate of the video stream in the output file, in kilobits/second. Valid values
   *             depend on the values of <code>Level</code> and <code>Profile</code>. If you specify
   *                 <code>auto</code>, Elastic Transcoder uses the detected bit rate of the input source. If you
   *             specify a value other than <code>auto</code>, we recommend that you specify a value less
   *             than or equal to the maximum H.264-compliant value listed for your level and
   *             profile:</p>
   *         <p>
   *             <i>Level - Maximum video bit rate in kilobits/second (baseline and main Profile) :
   *                 maximum video bit rate in kilobits/second (high Profile)</i>
   *         </p>
   *         <ul>
   *             <li>
   *                <p>1 - 64 : 80</p>
   *             </li>
   *             <li>
   *                <p>1b - 128 : 160</p>
   *             </li>
   *             <li>
   *                <p>1.1 - 192 : 240</p>
   *             </li>
   *             <li>
   *                <p>1.2 - 384 : 480</p>
   *             </li>
   *             <li>
   *                <p>1.3 - 768 : 960</p>
   *             </li>
   *             <li>
   *                <p>2 - 2000 : 2500</p>
   *             </li>
   *             <li>
   *                <p>3 - 10000 : 12500</p>
   *             </li>
   *             <li>
   *                <p>3.1 - 14000 : 17500</p>
   *             </li>
   *             <li>
   *                <p>3.2 - 20000 : 25000</p>
   *             </li>
   *             <li>
   *                <p>4 - 20000 : 25000</p>
   *             </li>
   *             <li>
   *                <p>4.1 - 50000 : 62500</p>
   *             </li>
   *          </ul>
   * @public
   */
  BitRate?: string | undefined;

  /**
   * <p>The frames per second for the video stream in the output file. Valid values include:</p>
   *         <p>
   *             <code>auto</code>, <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>,
   *                 <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code>
   *          </p>
   *         <p>If you specify <code>auto</code>, Elastic Transcoder uses the detected frame rate of the input source.
   *             If you specify a frame rate, we recommend that you perform the following
   *             calculation:</p>
   *         <p>
   *             <code>Frame rate = maximum recommended decoding speed in luma samples/second / (width in
   *                 pixels * height in pixels)</code>
   *         </p>
   *         <p>where:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <i>width in pixels</i> and <i>height in pixels</i> represent the Resolution of the
   *                 output video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>maximum recommended decoding speed in Luma samples/second</i> is less than or
   *                 equal to the maximum value listed in the following table, based on the value that
   *                 you specified for Level.</p>
   *             </li>
   *          </ul>
   *         <p>The maximum recommended decoding speed in Luma samples/second for each level is described
   *             in the following list (<i>Level - Decoding speed</i>):</p>
   *         <ul>
   *             <li>
   *                <p>1 - 380160</p>
   *             </li>
   *             <li>
   *                <p>1b - 380160</p>
   *             </li>
   *             <li>
   *                <p>1.1 - 76800</p>
   *             </li>
   *             <li>
   *                <p>1.2 - 1536000</p>
   *             </li>
   *             <li>
   *                <p>1.3 - 3041280</p>
   *             </li>
   *             <li>
   *                <p>2 - 3041280</p>
   *             </li>
   *             <li>
   *                <p>2.1 - 5068800</p>
   *             </li>
   *             <li>
   *                <p>2.2 - 5184000</p>
   *             </li>
   *             <li>
   *                <p>3 - 10368000</p>
   *             </li>
   *             <li>
   *                <p>3.1 - 27648000</p>
   *             </li>
   *             <li>
   *                <p>3.2 - 55296000</p>
   *             </li>
   *             <li>
   *                <p>4 - 62914560</p>
   *             </li>
   *             <li>
   *                <p>4.1 - 62914560</p>
   *             </li>
   *          </ul>
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * <p>If you specify <code>auto</code> for <code>FrameRate</code>, Elastic Transcoder uses the frame rate of
   *             the input video for the frame rate of the output video. Specify the maximum frame rate
   *             that you want Elastic Transcoder to use when the frame rate of the input video is greater than the
   *             desired maximum frame rate of the output video. Valid values include: <code>10</code>,
   *                 <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>,
   *                 <code>29.97</code>, <code>30</code>, <code>60</code>.</p>
   * @public
   */
  MaxFrameRate?: string | undefined;

  /**
   * <important>
   *             <p>To better control resolution and aspect ratio of output videos, we recommend that you
   *                 use the values <code>MaxWidth</code>, <code>MaxHeight</code>,
   *                     <code>SizingPolicy</code>, <code>PaddingPolicy</code>, and
   *                     <code>DisplayAspectRatio</code> instead of <code>Resolution</code> and
   *                     <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do
   *                 not use them together.</p>
   *         </important>
   *         <p>The width and height of the video in the output file, in pixels. Valid values are
   *                 <code>auto</code> and <i>width</i> x <i>height</i>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>auto</code>: Elastic Transcoder attempts to preserve the width and height of the input file,
   *                 subject to the following rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>width</i> x <i>height</i>
   *                   </code>: The width and height of the output video
   *                 in pixels.</p>
   *             </li>
   *          </ul>
   *         <p>Note the following about specifying the width and height:</p>
   *         <ul>
   *             <li>
   *                <p>The width must be an even integer between 128 and 4096, inclusive.</p>
   *             </li>
   *             <li>
   *                <p>The height must be an even integer between 96 and 3072, inclusive.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a resolution that is less than the resolution of the input file, Elastic Transcoder
   *                 rescales the output file to the lower resolution.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a resolution that is greater than the resolution of the input file,
   *                 Elastic Transcoder rescales the output to the higher resolution.</p>
   *             </li>
   *             <li>
   *                <p>We recommend that you specify a resolution for which the product of width and height
   *                 is less than or equal to the applicable value in the following list (<i>List - Max
   *                     width x height value</i>):</p>
   *                <ul>
   *                   <li>
   *                      <p>1 - 25344</p>
   *                   </li>
   *                   <li>
   *                      <p>1b - 25344</p>
   *                   </li>
   *                   <li>
   *                      <p>1.1 - 101376</p>
   *                   </li>
   *                   <li>
   *                      <p>1.2 - 101376</p>
   *                   </li>
   *                   <li>
   *                      <p>1.3 - 101376</p>
   *                   </li>
   *                   <li>
   *                      <p>2 - 101376</p>
   *                   </li>
   *                   <li>
   *                      <p>2.1 - 202752</p>
   *                   </li>
   *                   <li>
   *                      <p>2.2 - 404720</p>
   *                   </li>
   *                   <li>
   *                      <p>3 - 404720</p>
   *                   </li>
   *                   <li>
   *                      <p>3.1 - 921600</p>
   *                   </li>
   *                   <li>
   *                      <p>3.2 - 1310720</p>
   *                   </li>
   *                   <li>
   *                      <p>4 - 2097152</p>
   *                   </li>
   *                   <li>
   *                      <p>4.1 - 2097152</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *          </ul>
   * @public
   */
  Resolution?: string | undefined;

  /**
   * <important>
   *             <p>To better control resolution and aspect ratio of output videos, we recommend that you
   *                 use the values <code>MaxWidth</code>, <code>MaxHeight</code>,
   *                     <code>SizingPolicy</code>, <code>PaddingPolicy</code>, and
   *                     <code>DisplayAspectRatio</code> instead of <code>Resolution</code> and
   *                     <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do
   *                 not use them together.</p>
   *         </important>
   *         <p>The display aspect ratio of the video in the output file. Valid values include:</p>
   *         <p>
   *             <code>auto</code>, <code>1:1</code>, <code>4:3</code>, <code>3:2</code>,
   *                 <code>16:9</code>
   *          </p>
   *         <p>If you specify <code>auto</code>, Elastic Transcoder tries to preserve the aspect ratio of the input
   *             file.</p>
   *         <p>If you specify an aspect ratio for the output file that differs from aspect ratio
   *             of the input file, Elastic Transcoder adds pillarboxing (black bars on the sides) or letterboxing
   *             (black bars on the top and bottom) to maintain the aspect ratio of the active region
   *             of the video.</p>
   * @public
   */
  AspectRatio?: string | undefined;

  /**
   * <p> The maximum width of the output video in pixels. If you specify <code>auto</code>, Elastic Transcoder
   *             uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even
   *             integer between 128 and 4096. </p>
   * @public
   */
  MaxWidth?: string | undefined;

  /**
   * <p>The maximum height of the output video in pixels. If you specify <code>auto</code>, Elastic Transcoder
   *             uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even
   *             integer between 96 and 3072.</p>
   * @public
   */
  MaxHeight?: string | undefined;

  /**
   * <p>The value that Elastic Transcoder adds to the metadata in the output file.</p>
   * @public
   */
  DisplayAspectRatio?: string | undefined;

  /**
   * <p>Specify one of the following values to control scaling of the output video:</p>
   *
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>Fit</code>: Elastic Transcoder scales the output video so it matches the value that you
   *                     specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without
   *                     exceeding the other value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fill</code>: Elastic Transcoder scales the output video so it matches the value that you
   *                     specified in either <code>MaxWidth</code> or <code>MaxHeight</code> and matches
   *                     or exceeds the other value. Elastic Transcoder centers the output video and then crops it in
   *                     the dimension (if any) that exceeds the maximum value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stretch</code>: Elastic Transcoder stretches the output video to match the values that
   *                     you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the
   *                     relative proportions of the input video and the output video are different, the
   *                     output video will be distorted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Keep</code>: Elastic Transcoder does not scale the output video. If either
   *                     dimension of the input video exceeds the values that you specified for
   *                         <code>MaxWidth</code> and <code>MaxHeight</code>, Elastic Transcoder crops the output
   *                     video.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShrinkToFit</code>: Elastic Transcoder scales the output video down so that its
   *                     dimensions match the values that you specified for at least one of
   *                         <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either
   *                     value. If you specify this option, Elastic Transcoder does not scale the video up.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShrinkToFill</code>: Elastic Transcoder scales the output video down so that its
   *                     dimensions match the values that you specified for at least one of
   *                         <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below
   *                     either value. If you specify this option, Elastic Transcoder does not scale the video up.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SizingPolicy?: string | undefined;

  /**
   * <p>When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add black bars to
   *             the top and bottom and/or left and right sides of the output video to make the total
   *             size of the output video match the values that you specified for <code>MaxWidth</code>
   *             and <code>MaxHeight</code>.</p>
   * @public
   */
  PaddingPolicy?: string | undefined;

  /**
   * <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay
   *             over videos that are transcoded using this preset. You can specify settings for up to four
   *             watermarks. Watermarks appear in the specified size and location, and with the specified
   *             opacity for the duration of the transcoded video.</p>
   *         <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not
   *             rectangular, use the .png format, which supports transparency.</p>
   *         <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that
   *             you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job
   *             than you specify watermark settings in the preset, which allows you to use the same preset
   *             for up to four watermarks that have different dimensions.</p>
   * @public
   */
  Watermarks?: PresetWatermark[] | undefined;
}

/**
 * <p>The <code>CreatePresetRequest</code> structure.</p>
 * @public
 */
export interface CreatePresetRequest {
  /**
   * <p>The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the preset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The container type for the output file. Valid values include <code>flac</code>,
   *             <code>flv</code>, <code>fmp4</code>,
   *             <code>gif</code>, <code>mp3</code>,
   *             <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>,
   *             <code>ogg</code>, <code>ts</code>, and <code>webm</code>.</p>
   * @public
   */
  Container: string | undefined;

  /**
   * <p>A section of the request body that specifies the video parameters.</p>
   * @public
   */
  Video?: VideoParameters | undefined;

  /**
   * <p>A section of the request body that specifies the audio parameters.</p>
   * @public
   */
  Audio?: AudioParameters | undefined;

  /**
   * <p>A section of the request body that specifies the thumbnail parameters, if any.</p>
   * @public
   */
  Thumbnails?: Thumbnails | undefined;
}

/**
 * <p>Presets are templates that contain most of the settings for transcoding media files
 *             from one format to another. Elastic Transcoder includes some default presets for common formats, for
 *             example, several iPod and iPhone versions. You can also create your own presets for formats
 *             that aren't included among the default presets. You specify which preset you want to use
 *             when you create a job.</p>
 * @public
 */
export interface Preset {
  /**
   * <p>Identifier for the new preset. You use this value to get settings for the preset or to delete it.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the preset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the preset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the preset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The container type for the output file. Valid values include <code>flac</code>,
   *             <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>,
   *             <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>,
   *             <code>ogg</code>, <code>ts</code>, and <code>webm</code>.</p>
   * @public
   */
  Container?: string | undefined;

  /**
   * <p>A section of the response body that provides information about the audio preset values.</p>
   * @public
   */
  Audio?: AudioParameters | undefined;

  /**
   * <p>A section of the response body that provides information about the video preset values.</p>
   * @public
   */
  Video?: VideoParameters | undefined;

  /**
   * <p>A section of the response body that provides information about the thumbnail preset values, if any.</p>
   * @public
   */
  Thumbnails?: Thumbnails | undefined;

  /**
   * <p>Whether the preset is a default preset provided by Elastic Transcoder
   *                 (<code>System</code>) or a preset that you have defined (<code>Custom</code>).</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>The <code>CreatePresetResponse</code> structure.</p>
 * @public
 */
export interface CreatePresetResponse {
  /**
   * <p>A section of the response body that provides information about the preset that is created.</p>
   * @public
   */
  Preset?: Preset | undefined;

  /**
   * <p>If the preset settings don't comply with the standards for the video codec but Elastic Transcoder
   *             created the preset, this message explains the reason the preset settings don't meet the
   *             standard. Elastic Transcoder created the preset because the settings might produce
   *             acceptable output.</p>
   * @public
   */
  Warning?: string | undefined;
}

/**
 * <p>The <code>DeletePipelineRequest</code> structure.</p>
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * <p>The identifier of the pipeline that you want to delete.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The <code>DeletePipelineResponse</code> structure.</p>
 * @public
 */
export interface DeletePipelineResponse {}

/**
 * <p>The <code>DeletePresetRequest</code> structure.</p>
 * @public
 */
export interface DeletePresetRequest {
  /**
   * <p>The identifier of the preset for which you want to get detailed information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The <code>DeletePresetResponse</code> structure.</p>
 * @public
 */
export interface DeletePresetResponse {}

/**
 * <p>The <code>ListJobsByPipelineRequest</code> structure.</p>
 * @public
 */
export interface ListJobsByPipelineRequest {
  /**
   * <p>The ID of the pipeline for which you want to get job information.</p>
   * @public
   */
  PipelineId: string | undefined;

  /**
   * <p> To list jobs in chronological order by the date and time that they were submitted, enter
   *                 <code>true</code>. To list jobs in reverse chronological order, enter
   *                 <code>false</code>. </p>
   * @public
   */
  Ascending?: string | undefined;

  /**
   * <p> When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in
   *             subsequent <code>GET</code> requests to get each successive page of results. </p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>The <code>ListJobsByPipelineResponse</code> structure.</p>
 * @public
 */
export interface ListJobsByPipelineResponse {
  /**
   * <p>An array of <code>Job</code> objects that are in the specified pipeline.</p>
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * <p> A value that you use to access the second and subsequent pages of results, if any. When
   *             the jobs in the specified pipeline fit on one page or when you've reached the last page
   *             of results, the value of <code>NextPageToken</code> is <code>null</code>. </p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The <code>ListJobsByStatusRequest</code> structure.</p>
 * @public
 */
export interface ListJobsByStatusRequest {
  /**
   * <p>To get information about all of the jobs associated with the current AWS account that
   *             have a given status, specify the following status: <code>Submitted</code>,
   *                 <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or
   *                 <code>Error</code>.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p> To list jobs in chronological order by the date and time that they were submitted, enter
   *                 <code>true</code>. To list jobs in reverse chronological order, enter
   *                 <code>false</code>. </p>
   * @public
   */
  Ascending?: string | undefined;

  /**
   * <p> When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in
   *             subsequent <code>GET</code> requests to get each successive page of results. </p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>
 *             The <code>ListJobsByStatusResponse</code> structure.
 *         </p>
 * @public
 */
export interface ListJobsByStatusResponse {
  /**
   * <p>An array of <code>Job</code> objects that have the specified status.</p>
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * <p> A value that you use to access the second and subsequent pages of results, if any. When
   *             the jobs in the specified pipeline fit on one page or when you've reached the last page
   *             of results, the value of <code>NextPageToken</code> is <code>null</code>. </p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The <code>ListPipelineRequest</code> structure.</p>
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * <p>To list pipelines in chronological order by the date and time that they were created, enter
   *             <code>true</code>. To list pipelines in reverse chronological order, enter
   *             <code>false</code>.</p>
   * @public
   */
  Ascending?: string | undefined;

  /**
   * <p>When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in
   *             subsequent <code>GET</code> requests to get each successive page of results. </p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>A list of the pipelines associated with the current AWS account.</p>
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>An array of <code>Pipeline</code> objects.</p>
   * @public
   */
  Pipelines?: Pipeline[] | undefined;

  /**
   * <p>A value that you use to access the second and subsequent pages of results, if any. When
   *             the pipelines fit on one page or when you've reached the last page
   *             of results, the value of <code>NextPageToken</code> is <code>null</code>.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The <code>ListPresetsRequest</code> structure.</p>
 * @public
 */
export interface ListPresetsRequest {
  /**
   * <p>To list presets in chronological order by the date and time that they were created, enter
   *             <code>true</code>. To list presets in reverse chronological order, enter
   *             <code>false</code>.</p>
   * @public
   */
  Ascending?: string | undefined;

  /**
   * <p>When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in
   *             subsequent <code>GET</code> requests to get each successive page of results. </p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>The <code>ListPresetsResponse</code> structure.</p>
 * @public
 */
export interface ListPresetsResponse {
  /**
   * <p>An array of <code>Preset</code> objects.</p>
   * @public
   */
  Presets?: Preset[] | undefined;

  /**
   * <p>A value that you use to access the second and subsequent pages of results, if any. When
   *             the presets fit on one page or when you've reached the last page
   *             of results, the value of <code>NextPageToken</code> is <code>null</code>.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The <code>ReadJobRequest</code> structure.</p>
 * @public
 */
export interface ReadJobRequest {
  /**
   * <p>The identifier of the job for which you want to get detailed information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The <code>ReadJobResponse</code> structure.</p>
 * @public
 */
export interface ReadJobResponse {
  /**
   * <p>A section of the response body that provides information about the job.</p>
   * @public
   */
  Job?: Job | undefined;
}

/**
 * <p>The <code>ReadPipelineRequest</code> structure.</p>
 * @public
 */
export interface ReadPipelineRequest {
  /**
   * <p>The identifier of the pipeline to read.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The <code>ReadPipelineResponse</code> structure.</p>
 * @public
 */
export interface ReadPipelineResponse {
  /**
   * <p>A section of the response body that provides information about the pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;

  /**
   * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region
   *             as the pipeline.</p>
   *         <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics,
   *             and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;
}

/**
 * <p>The <code>ReadPresetRequest</code> structure.</p>
 * @public
 */
export interface ReadPresetRequest {
  /**
   * <p>The identifier of the preset for which you want to get detailed information.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The <code>ReadPresetResponse</code> structure.</p>
 * @public
 */
export interface ReadPresetResponse {
  /**
   * <p>A section of the response body that provides information about the preset.</p>
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * <p> The <code>TestRoleRequest</code> structure. </p>
 *
 * @deprecated
 * @public
 */
export interface TestRoleRequest {
  /**
   * <p>The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.</p>
   * @public
   */
  InputBucket: string | undefined;

  /**
   * <p>The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.</p>
   * @public
   */
  OutputBucket: string | undefined;

  /**
   * <p>The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.</p>
   * @public
   */
  Topics: string[] | undefined;
}

/**
 * <p>The <code>TestRoleResponse</code> structure.</p>
 *
 * @deprecated
 * @public
 */
export interface TestRoleResponse {
  /**
   * <p>If the operation is successful, this value is <code>true</code>; otherwise, the value is
   *                 <code>false</code>.</p>
   * @public
   */
  Success?: string | undefined;

  /**
   * <p>If the <code>Success</code> element contains <code>false</code>, this value is an array
   *             of one or more error messages that were generated during the test process.</p>
   * @public
   */
  Messages?: string[] | undefined;
}

/**
 * <p>The <code>UpdatePipelineRequest</code> structure.</p>
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but
   *             uniqueness is not enforced.</p>
   *         <p>Constraints: Maximum 40 characters</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics
   *             that you want to use as watermarks.</p>
   * @public
   */
  InputBucket?: string | undefined;

  /**
   * <p>The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for
   *             this pipeline.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p>
   *         <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>,
   *         you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is
   *         created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default
   *         AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>,
   *             or <code>aes-gcm</code>.</p>
   * @public
   */
  AwsKmsKeyArn?: string | undefined;

  /**
   * <p>The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p>
   *         <important>
   *             <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p>
   *         </important>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to
   *                 notify when Elastic Transcoder has started to process jobs that are added to this pipeline. This
   *                 is the ARN that Amazon SNS returned when you created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when
   *                 Elastic Transcoder has finished processing a job. This is the ARN that Amazon SNS returned when
   *                 you created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters a warning condition. This is the ARN that Amazon SNS returned when you
   *                 created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters an error condition. This is the ARN that Amazon SNS returned when you
   *                 created the topic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Notifications?: Notifications | undefined;

  /**
   * <p>The optional <code>ContentConfig</code> object specifies information about the Amazon S3
   *             bucket in which you want Elastic Transcoder to save transcoded files and playlists:
   *             which bucket to use, which users you want to have access to the files, the type of
   *             access you want users to have, and the storage class that you want to assign to the
   *             files.</p>
   *         <p>If you specify values for <code>ContentConfig</code>, you must also specify values for
   *                 <code>ThumbnailConfig</code>.</p>
   *         <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>,
   *             omit the <code>OutputBucket</code> object.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save
   *                 transcoded files and playlists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Permissions</b> (Optional): The Permissions object specifies which users you want
   *                 to have access to transcoded files and the type of access you want them to have. You
   *                 can grant permissions to a maximum of 30 users and/or predefined Amazon S3
   *                 groups.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Grantee Type</b>: Specify the type of value that appears in the
   *                     <code>Grantee</code> object:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Canonical</b>: The value in the <code>Grantee</code> object is either the
   *                         canonical user ID for an AWS account or an origin access identity for an
   *                         Amazon CloudFront distribution. For more information about canonical user
   *                         IDs, see Access Control List (ACL) Overview in the Amazon Simple Storage
   *                         Service Developer Guide. For more information about using CloudFront origin
   *                         access identities to require that users use CloudFront URLs instead of
   *                         Amazon S3 URLs, see Using an Origin Access Identity to Restrict Access to
   *                         Your Amazon S3 Content.</p>
   *                      <important>
   *                         <p>A canonical user ID is not the same as an
   *                             AWS account number.</p>
   *                      </important>
   *                     </li>
   *                   <li>
   *                      <p>
   *                         <b>Email</b>: The value in the <code>Grantee</code> object is the registered
   *                         email address of an AWS account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Group</b>: The value in the <code>Grantee</code> object is one of the
   *                         following predefined Amazon S3 groups: <code>AllUsers</code>,
   *                             <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Grantee</b>: The AWS user or group that you want to have access to transcoded
   *                 files and playlists. To identify the user or group, you can specify the canonical
   *                 user ID for an AWS account, an origin access identity for a CloudFront distribution,
   *                 the registered email address of an AWS account, or a predefined Amazon S3 group </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Access</b>: The permission that you want to give to the AWS user that you
   *                 specified in <code>Grantee</code>. Permissions are granted on the files that Elastic
   *                 Transcoder adds to the bucket, including playlists and video files. Valid values
   *                 include: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>READ</code>: The grantee can read the objects and metadata for objects
   *                         that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>READ_ACP</code>: The grantee can read the object ACL for objects that
   *                         Elastic Transcoder adds to the Amazon S3 bucket. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WRITE_ACP</code>: The grantee can write the ACL for the objects that
   *                         Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FULL_CONTROL</code>: The grantee has <code>READ</code>,
   *                             <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the
   *                         objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or
   *                     <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to
   *                 the video files and playlists that it stores in your Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentConfig?: PipelineOutputConfig | undefined;

  /**
   * <p>The <code>ThumbnailConfig</code> object specifies several values, including the Amazon S3
   *             bucket in which you want Elastic Transcoder to save thumbnail files, which users you want to have
   *             access to the files, the type of access you want users to have, and the storage class
   *             that you want to assign to the files.</p>
   *         <p>If you specify values for <code>ContentConfig</code>, you must also specify values for
   *                 <code>ThumbnailConfig</code> even if you don't want to create thumbnails.</p>
   *         <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>,
   *             omit the <code>OutputBucket</code> object.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save
   *                 thumbnail files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Permissions</b> (Optional): The <code>Permissions</code> object specifies which
   *                 users and/or predefined Amazon S3 groups you want to have access to thumbnail files,
   *                 and the type of access you want them to have. You can grant permissions to a maximum
   *                 of 30 users and/or predefined Amazon S3 groups.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>GranteeType</b>: Specify the type of value that appears in the Grantee object:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Canonical</b>: The value in the <code>Grantee</code> object is either the
   *                         canonical user ID for an AWS account or an origin access identity for an
   *                         Amazon CloudFront distribution.</p>
   *                      <important>
   *                         <p>A canonical user ID is not the
   *                             same as an AWS account number.</p>
   *                      </important>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Email</b>: The value in the <code>Grantee</code> object is the registered
   *                         email address of an AWS account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Group</b>: The value in the <code>Grantee</code> object is one of the
   *                         following predefined Amazon S3 groups: <code>AllUsers</code>,
   *                             <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Grantee</b>: The AWS user or group that you want to have access to thumbnail
   *                 files. To identify the user or group, you can specify the canonical user ID for an
   *                 AWS account, an origin access identity for a CloudFront distribution, the registered
   *                 email address of an AWS account, or a predefined Amazon S3 group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Access</b>: The permission that you want to give to the AWS user that you
   *                 specified in <code>Grantee</code>. Permissions are granted on the thumbnail files
   *                 that Elastic Transcoder adds to the bucket. Valid values include: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>READ</code>: The grantee can read the thumbnails and metadata for
   *                         objects that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails
   *                         that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails
   *                         that Elastic Transcoder adds to the Amazon S3 bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FULL_CONTROL</code>: The grantee has <code>READ</code>,
   *                             <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the
   *                         thumbnails that Elastic Transcoder adds to the Amazon S3 bucket. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or
   *                     <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to
   *                 the thumbnails that it stores in your Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ThumbnailConfig?: PipelineOutputConfig | undefined;
}

/**
 * <p>When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>The pipeline updated by this <code>UpdatePipelineResponse</code> call.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;

  /**
   * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the
   *             pipeline.</p>
   *         <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and
   *             AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
   * @public
   */
  Warnings?: Warning[] | undefined;
}

/**
 * <p>The <code>UpdatePipelineNotificationsRequest</code> structure.</p>
 * @public
 */
export interface UpdatePipelineNotificationsRequest {
  /**
   * <p>The identifier of the pipeline for which you want to change notification settings.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p>
   *         <important>
   *             <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p>
   *          </important>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to
   *                 notify when Elastic Transcoder has started to process jobs that are added to this pipeline. This
   *                 is the ARN that Amazon SNS returned when you created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when
   *                 Elastic Transcoder has finished processing a job. This is the ARN that Amazon SNS returned when
   *                 you created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters a warning condition. This is the ARN that Amazon SNS returned when you
   *                 created the topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder
   *                 encounters an error condition. This is the ARN that Amazon SNS returned when you
   *                 created the topic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Notifications: Notifications | undefined;
}

/**
 * <p>The <code>UpdatePipelineNotificationsResponse</code> structure.</p>
 * @public
 */
export interface UpdatePipelineNotificationsResponse {
  /**
   * <p>A section of the response body that provides information about the pipeline associated
   *             with this notification.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * <p>The <code>UpdatePipelineStatusRequest</code> structure.</p>
 * @public
 */
export interface UpdatePipelineStatusRequest {
  /**
   * <p>The identifier of the pipeline to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The desired status of the pipeline:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code>: The pipeline is processing jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Paused</code>: The pipeline is not currently processing jobs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: string | undefined;
}

/**
 * <p>When you update status for a pipeline,
 *             Elastic Transcoder returns the values that you specified in the request.</p>
 * @public
 */
export interface UpdatePipelineStatusResponse {
  /**
   * <p>A section of the response body that provides information about the pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;
}
