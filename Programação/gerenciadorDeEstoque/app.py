import tkinter as tk
from tkinter import messagebox, simpledialog
import pandas as pd

class InventoryManagerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Gerenciador de Estoque")

        self.filepath = "estoque.xlsx"
        self.df = pd.DataFrame(columns=["Produto", "Quantidade", "Preço", "Categoria"])

        self.label = tk.Label(root, text="Gerenciador de Estoque")
        self.label.pack(pady=10)

        self.add_product_button = tk.Button(root, text="Adicionar Produto", command=self.add_product)
        self.add_product_button.pack(pady=5)

        self.edit_product_button = tk.Button(root, text="Editar Produto", command=self.edit_product)
        self.edit_product_button.pack(pady=5)

        self.delete_product_button = tk.Button(root, text="Excluir Produto", command=self.delete_product)
        self.delete_product_button.pack(pady=5)

        self.generate_report_button = tk.Button(root, text="Gerar Relatório", command=self.generate_report)
        self.generate_report_button.pack(pady=10)

        self.save_button = tk.Button(root, text="Salvar", command=self.save_data)
        self.save_button.pack(pady=10)

        self.reset_button = tk.Button(root, text="Resetar Estoque", command=self.reset_data)
        self.reset_button.pack(pady=10)

        self.table_frame = tk.Frame(root)
        self.table_frame.pack(pady=10)

        self.load_data()
        self.update_table_display()

    def add_product(self):
        product = simpledialog.askstring("Input", "Nome do Produto:")
        if product:
            quantity = simpledialog.askinteger("Input", "Quantidade:")
            price = simpledialog.askfloat("Input", "Preço:")
            category = simpledialog.askstring("Input", "Categoria:")
            new_data = pd.DataFrame({"Produto": [product], "Quantidade": [quantity], "Preço": [price], "Categoria": [category]})
            self.df = pd.concat([self.df, new_data], ignore_index=True)
            self.update_table_display()

    def edit_product(self):
        if self.df.empty:
            messagebox.showerror("Erro", "Nenhum produto no estoque.")
            return

        product_index = simpledialog.askinteger("Input", "Número do Produto para Editar (1 a {}):".format(len(self.df)))
        if product_index and 1 <= product_index <= len(self.df):
            product_index -= 1
            product = simpledialog.askstring("Input", "Nome do Produto:", initialvalue=self.df.at[product_index, "Produto"])
            quantity = simpledialog.askinteger("Input", "Quantidade:", initialvalue=self.df.at[product_index, "Quantidade"])
            price = simpledialog.askfloat("Input", "Preço:", initialvalue=self.df.at[product_index, "Preço"])
            category = simpledialog.askstring("Input", "Categoria:", initialvalue=self.df.at[product_index, "Categoria"])
            self.df.at[product_index, "Produto"] = product
            self.df.at[product_index, "Quantidade"] = quantity
            self.df.at[product_index, "Preço"] = price
            self.df.at[product_index, "Categoria"] = category
            self.update_table_display()

    def delete_product(self):
        if self.df.empty:
            messagebox.showerror("Erro", "Nenhum produto no estoque.")
            return

        product_index = simpledialog.askinteger("Input", "Número do Produto para Excluir (1 a {}):".format(len(self.df)))
        if product_index and 1 <= product_index <= len(self.df):
            self.df = self.df.drop(product_index - 1).reset_index(drop=True)
            self.update_table_display()

    def generate_report(self):
        if self.df.empty:
            messagebox.showerror("Erro", "Nenhum produto no estoque.")
            return

        report = self.df.groupby("Categoria").agg({"Quantidade": "sum", "Preço": "mean"}).reset_index()
        report_window = tk.Toplevel(self.root)
        report_window.title("Relatório de Estoque")

        for col_num, column in enumerate(report.columns):
            label = tk.Label(report_window, text=column, borderwidth=1, relief="solid")
            label.grid(row=0, column=col_num, padx=5, pady=5)

        for row_num, row in report.iterrows():
            for col_num, value in enumerate(row):
                label = tk.Label(report_window, text=value, borderwidth=1, relief="solid")
                label.grid(row=row_num+1, column=col_num, padx=5, pady=5)

    def save_data(self):
        self.df.to_excel(self.filepath, index=False)
        messagebox.showinfo("Sucesso", "Dados salvos com sucesso!")

    def reset_data(self):
        self.df = pd.DataFrame(columns=["Produto", "Quantidade", "Preço", "Categoria"])
        self.update_table_display()
        messagebox.showinfo("Sucesso", "Estoque resetado com sucesso!")

    def load_data(self):
        try:
            self.df = pd.read_excel(self.filepath)
        except FileNotFoundError:
            self.df = pd.DataFrame(columns=["Produto", "Quantidade", "Preço", "Categoria"])

    def update_table_display(self):
        for widget in self.table_frame.winfo_children():
            widget.destroy()

        if not self.df.empty:
            for col_num, column in enumerate(self.df.columns):
                label = tk.Label(self.table_frame, text=column, borderwidth=1, relief="solid")
                label.grid(row=0, column=col_num, padx=5, pady=5)

            for row_num, row in self.df.iterrows():
                for col_num, value in enumerate(row):
                    label = tk.Label(self.table_frame, text=value, borderwidth=1, relief="solid")
                    label.grid(row=row_num+1, column=col_num, padx=5, pady=5)

if __name__ == "__main__":
    root = tk.Tk()
    app = InventoryManagerApp(root)
    root.mainloop()