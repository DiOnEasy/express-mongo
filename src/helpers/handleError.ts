export const handleError = (err: unknown, res: any) => {
    if (err instanceof Error) {
        res.status(500).json({ message: err.message });
    } else {
        res.status(500).json({ message: 'Unknown error occured' });
    }
};
