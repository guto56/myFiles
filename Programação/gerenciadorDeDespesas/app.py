import tkinter as tk
from tkinter import messagebox, simpledialog
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class ExpenseManagerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Gerenciador de Despesas")

        self.filepath = "despesas.xlsx"
        self.df = pd.DataFrame(columns=["Descrição", "Valor", "Categoria", "Data"])

        self.label = tk.Label(root, text="Gerenciador de Despesas")
        self.label.pack(pady=10)

        self.add_expense_button = tk.Button(root, text="Adicionar Despesa", command=self.add_expense)
        self.add_expense_button.pack(pady=5)

        self.edit_expense_button = tk.Button(root, text="Editar Despesa", command=self.edit_expense)
        self.edit_expense_button.pack(pady=5)

        self.delete_expense_button = tk.Button(root, text="Excluir Despesa", command=self.delete_expense)
        self.delete_expense_button.pack(pady=5)

        self.generate_report_button = tk.Button(root, text="Gerar Relatório", command=self.generate_report)
        self.generate_report_button.pack(pady=10)

        self.save_button = tk.Button(root, text="Salvar", command=self.save_data)
        self.save_button.pack(pady=10)

        self.reset_button = tk.Button(root, text="Resetar Despesas", command=self.reset_data)
        self.reset_button.pack(pady=10)

        self.table_frame = tk.Frame(root)
        self.table_frame.pack(pady=10)

        self.load_data()
        self.update_table_display()

    def add_expense(self):
        description = simpledialog.askstring("Input", "Descrição da Despesa:")
        if description:
            value = simpledialog.askfloat("Input", "Valor:")
            category = simpledialog.askstring("Input", "Categoria:")
            date = simpledialog.askstring("Input", "Data (dd/mm/aaaa):")
            new_data = pd.DataFrame({"Descrição": [description], "Valor": [value], "Categoria": [category], "Data": [date]})
            self.df = pd.concat([self.df, new_data], ignore_index=True)
            self.update_table_display()

    def edit_expense(self):
        if self.df.empty:
            messagebox.showerror("Erro", "Nenhuma despesa registrada.")
            return

        expense_index = simpledialog.askinteger("Input", "Número da Despesa para Editar (1 a {}):".format(len(self.df)))
        if expense_index and 1 <= expense_index <= len(self.df):
            expense_index -= 1
            description = simpledialog.askstring("Input", "Descrição da Despesa:", initialvalue=self.df.at[expense_index, "Descrição"])
            value = simpledialog.askfloat("Input", "Valor:", initialvalue=self.df.at[expense_index, "Valor"])
            category = simpledialog.askstring("Input", "Categoria:", initialvalue=self.df.at[expense_index, "Categoria"])
            date = simpledialog.askstring("Input", "Data (dd/mm/aaaa):", initialvalue=self.df.at[expense_index, "Data"])
            self.df.at[expense_index, "Descrição"] = description
            self.df.at[expense_index, "Valor"] = value
            self.df.at[expense_index, "Categoria"] = category
            self.df.at[expense_index, "Data"] = date
            self.update_table_display()

    def delete_expense(self):
        if self.df.empty:
            messagebox.showerror("Erro", "Nenhuma despesa registrada.")
            return

        expense_index = simpledialog.askinteger("Input", "Número da Despesa para Excluir (1 a {}):".format(len(self.df)))
        if expense_index and 1 <= expense_index <= len(self.df):
            self.df = self.df.drop(expense_index - 1).reset_index(drop=True)
            self.update_table_display()

    def generate_report(self):
        if self.df.empty:
            messagebox.showerror("Erro", "Nenhuma despesa registrada.")
            return

        report = self.df.groupby("Categoria").agg({"Valor": "sum"}).reset_index()
        report_window = tk.Toplevel(self.root)
        report_window.title("Relatório de Despesas")

        for col_num, column in enumerate(report.columns):
            label = tk.Label(report_window, text=column, borderwidth=1, relief="solid")
            label.grid(row=0, column=col_num, padx=5, pady=5)

        for row_num, row in report.iterrows():
            for col_num, value in enumerate(row):
                label = tk.Label(report_window, text=value, borderwidth=1, relief="solid")
                label.grid(row=row_num+1, column=col_num, padx=5, pady=5)

        self.plot_expenses(report)

    def plot_expenses(self, report):
        fig, ax = plt.subplots()
        ax.pie(report["Valor"], labels=report["Categoria"], autopct='%1.1f%%', startangle=90)
        ax.axis('equal')
        plt.title("Despesas por Categoria")

        canvas = FigureCanvasTkAgg(fig, master=self.root)
        canvas.draw()
        canvas.get_tk_widget().pack(pady=10)

    def save_data(self):
        self.df.to_excel(self.filepath, index=False)
        messagebox.showinfo("Sucesso", "Dados salvos com sucesso!")

    def reset_data(self):
        self.df = pd.DataFrame(columns=["Descrição", "Valor", "Categoria", "Data"])
        self.update_table_display()
        messagebox.showinfo("Sucesso", "Despesas resetadas com sucesso!")

    def load_data(self):
        try:
            self.df = pd.read_excel(self.filepath)
        except FileNotFoundError:
            self.df = pd.DataFrame(columns=["Descrição", "Valor", "Categoria", "Data"])

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
    app = ExpenseManagerApp(root)
    root.mainloop()