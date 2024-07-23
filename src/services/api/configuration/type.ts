export interface IConfiguration {
  similarityThresholdInClient: number;
  minFaceConfidenceThreshold: number;
  faceSaveStrategy: 'NOT_SAVE' | 'ALL_SAVE' | 'EMBED_SAVE';
  maxPresenceTime: number;
  minFaceWidth: number;
  recoveryFilePath: string;
  minPresenceTime: number;
  backupStrategy: 'AUTO_BACKUP' | 'SELECTION_BACKUP' | 'EMERGENCY_BACKUP';
  logPath: string;
  backupDays: number;
  backupPath: string;
  maxFaceWidth: number;
  backupDate: string;
  databaseUrl: string;
  similarityThresholdInExitEnter: number;
}

export interface IPostConfiguration {
  key: string;
  value: string;
}
