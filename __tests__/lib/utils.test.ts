import { cn } from '../../lib/utils';

describe('cn utility', () => {
  it('should merge simple class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
    expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
    expect(cn('class1', null, 'class2')).toBe('class1 class2');
  });

  it('should handle Tailwind class conflicts correctly', () => {
    expect(cn('p-4 bg-red-500', 'p-2')).toBe('bg-red-500 p-2');
    expect(cn('px-4 py-2', 'p-6')).toBe('p-6');
    expect(cn('text-sm font-bold', 'text-lg')).toBe('font-bold text-lg');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const isPending = false;

    expect(cn(
      'base-class',
      isActive && 'active',
      isPending && 'pending'
    )).toBe('base-class active');
  });

  it('should handle array of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
    expect(cn(['p-4', 'bg-blue-500'], ['hover:bg-blue-600'])).toBe('p-4 bg-blue-500 hover:bg-blue-600');
  });
});
