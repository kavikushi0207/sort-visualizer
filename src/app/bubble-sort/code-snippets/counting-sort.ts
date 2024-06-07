export const countingSortJava = `
public static int[] countingSort(int[] arr) {
    int n = arr.length;
    int max = Arrays.stream(arr).max().getAsInt();
    int min = Arrays.stream(arr).min().getAsInt();
    int range = max - min + 1;
    int[] count = new int[range];
    int[] output = new int[n];
    for (int i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
    return arr;
}
`;
export const countingSortC = `
void countingSort(int arr[], int n) {
    int max = INT_MIN;
    int min = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    int range = max - min + 1;
    int count[range];
    int output[n];
    for (int i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const countingSortCPP = `
void countingSort(int arr[], int n) {
    int max = INT_MIN;
    int min = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    int range = max - min + 1;
    int count[range];
    int output[n];
    for (int i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const countingSortCSharp = `
public static void CountingSort(int[] arr) {
    int n = arr.Length;
    int max = arr.Max();
    int min = arr.Min();
    int range = max - min + 1;
    int[] count = new int[range];
    int[] output = new int[n];
    for (int i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const countingSortPython = `
def counting_sort(arr):
    n = len(arr)
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    count = [0] * range_val
    output = [0] * n
    for i in range(n):
        count[arr[i] - min_val] += 1
    for i in range(1, range_val):
        count[i] += count[i - 1]
    for i in range(n - 1, -1, -1):
        output[count[arr[i] - min_val] - 1] = arr[i]
        count[arr[i] - min_val] -= 1
    for i in range(n):
        arr[i] = output[i]
    return arr
`;
export const countingSortTypescript = `
export function countingSort(arr: number[]): number[] {
    const n = arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const count = Array(range).fill(0);
    const output = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
    return arr;
}
`;
export const countingSortJavascript = `
function countingSort(arr) {
    let n = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let count = Array(range).fill(0);
    let output = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }
    for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
    return arr;
}
`;