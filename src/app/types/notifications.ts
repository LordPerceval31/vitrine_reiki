export type NotificationType = 'success' | 'error';

export interface NotificationData {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}