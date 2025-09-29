import type { TextField } from 'payload';

export const COLOR = (overrides?: Omit<TextField, 'type'>): TextField => {
  const { name = 'color', label = 'Color', admin, ...rest } = overrides ?? {};
  return {
    type: 'text',
    name,
    label,
    admin: {
      ...admin,
      components: {
        Field: '@/components/ColorPicker', // Path to your custom component (adjust based on your project structure)
      },
    },
    validate: (val) => {
      // Optional: Validate as hex color
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      if (val && !hexRegex.test(val)) {
        return 'Invalid hex color format (e.g., #ff0000)';
      }
      return true;
    },
    ...rest,
  } as TextField;
};