#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <cstring>
#include <string.h>
#include <stdio.h>
#include <cmath>
#include <limits>
#include <assert.h>

struct t1854975273_0;
struct t785846927_0;
struct t_1786876978_0;
struct t_87838773_0;
struct t2110631700_0;

#include "class-internals.h"
#include "codegen/il2cpp-codegen.h"
#include "t_1666043062_0.h"
#include "t1854975273_0.h"
#include "t1854975273_0MD.h"
#include "t2073015405_0.h"
#include "t_1220538478_0.h"
#include "t_1220538478_0MD.h"
#include "t_1188768928_0.h"
#include "t182615375_0.h"
#include "t_1786876978_0.h"
#include "t_1786876978_0MD.h"
#include "t383085177_0.h"
#include "t785846927_0.h"
#include "t785846927_0MD.h"
#include "t117299260_0.h"
#include "t2110631700_0.h"

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
extern "C"  void m1951121363_0_gshared (t1854975273_0 * __this, const MethodInfo* method)
{
	{
		IL2CPP_RUNTIME_CLASS_INIT(IL2CPP_RGCTX_DATA(InitializedTypeInfo(method->declaring_type)->rgctx_data, 1));
		((  void (*) (t_1220538478_0 *, const MethodInfo*))IL2CPP_RGCTX_METHOD_INFO(InitializedTypeInfo(method->declaring_type)->rgctx_data, 0)->method)((t_1220538478_0 *)__this, IL2CPP_RGCTX_METHOD_INFO(InitializedTypeInfo(method->declaring_type)->rgctx_data, 0));
		return;
	}
}
extern "C"  int32_t m46323972_0_gshared (t1854975273_0 * __this, t_1188768928_0  p0, const MethodInfo* method)
{
	{
		t_1188768928_0  L_0 = p0;
		goto IL_000d;
	}
	{
		return 0;
	}

IL_000d:
	{
		int32_t L_1 = (int32_t)VirtFuncInvoker0< int32_t >::Invoke(2 /* System.Int32 System.Object::GetHashCode() */, (t_1786876978_0 *)Box(IL2CPP_RGCTX_DATA(InitializedTypeInfo(method->declaring_type)->rgctx_data, 2), (&p0)));
		return L_1;
	}
}
extern "C"  bool m2120773004_0_gshared (t1854975273_0 * __this, t_1188768928_0  p0, t_1188768928_0  p1, const MethodInfo* method)
{
	{
		t_1188768928_0  L_0 = p0;
		goto IL_0015;
	}
	{
		t_1188768928_0  L_1 = p1;
		t_1188768928_0  L_2 = L_1;
		t_1786876978_0 * L_3 = Box(IL2CPP_RGCTX_DATA(InitializedTypeInfo(method->declaring_type)->rgctx_data, 2), &L_2);
		return (bool)((((t_1786876978_0*)(t_1786876978_0 *)L_3) == ((t_1786876978_0*)(t_1786876978_0 *)NULL))? 1 : 0);
	}

IL_0015:
	{
		t_1188768928_0  L_4 = p1;
		t_1188768928_0  L_5 = L_4;
		t_1786876978_0 * L_6 = Box(IL2CPP_RGCTX_DATA(InitializedTypeInfo(method->declaring_type)->rgctx_data, 2), &L_5);
		bool L_7 = (bool)VirtFuncInvoker1< bool, t_1786876978_0 * >::Invoke(0 /* System.Boolean System.Object::Equals(System.Object) */, (t_1786876978_0 *)Box(IL2CPP_RGCTX_DATA(InitializedTypeInfo(method->declaring_type)->rgctx_data, 2), (&p0)), (t_1786876978_0 *)L_6);
		return L_7;
	}
}
extern "C"  void m_1800900771_0_gshared (t785846927_0 * __this, t_1786876978_0 * p0, t117299260_0 p1, const MethodInfo* method)
{
	__this->f0 = (methodPointerType)((MethodInfo*)p1.f0)->method;
	__this->f3 = p1;
	__this->f2 = p0;
}
extern "C"  int32_t m_1477308449_0_gshared (t785846927_0 * __this, t_1188768928_0  p0, t_1188768928_0  p1, const MethodInfo* method)
{
	if(__this->f9 != NULL)
	{
		m_1477308449_0((t785846927_0 *)__this->f9,p0, p1, method);
	}
	il2cpp_codegen_raise_execution_engine_exception_if_method_is_not_found((MethodInfo*)(__this->f3.f0));
	bool ___methodIsStatic = MethodIsStatic((MethodInfo*)(__this->f3.f0));
	if (__this->f2 != NULL && ___methodIsStatic)
	{
		typedef int32_t (*FunctionPointerType) (t_1786876978_0 *, t_1786876978_0 * __this, t_1188768928_0  p0, t_1188768928_0  p1, const MethodInfo* method);
		return ((FunctionPointerType)__this->f0)(NULL,__this->f2,p0, p1,(MethodInfo*)(__this->f3.f0));
	}
	else
	{
		typedef int32_t (*FunctionPointerType) (t_1786876978_0 * __this, t_1188768928_0  p0, t_1188768928_0  p1, const MethodInfo* method);
		return ((FunctionPointerType)__this->f0)(__this->f2,p0, p1,(MethodInfo*)(__this->f3.f0));
	}
}
extern TypeInfo* t_1188768928_0_TI_var;
extern "C"  t_1786876978_0 * m_303256544_0_gshared (t785846927_0 * __this, t_1188768928_0  p0, t_1188768928_0  p1, t2110631700_0 * p2, t_1786876978_0 * p3, const MethodInfo* method)
{
	static bool s_Il2CppMethodIntialized;
	if (!s_Il2CppMethodIntialized)
	{
		t_1188768928_0_TI_var = il2cpp_codegen_type_info_from_index(1079);
		s_Il2CppMethodIntialized = true;
	}
	void *__d_args[3] = {0};
	__d_args[0] = Box(t_1188768928_0_TI_var, &p0);
	__d_args[1] = Box(t_1188768928_0_TI_var, &p1);
	return (t_1786876978_0 *)il2cpp_delegate_begin_invoke((Il2CppDelegate*)__this, __d_args, (Il2CppDelegate*)p2, (Il2CppObject*)p3);
}
extern "C"  int32_t m_540008235_0_gshared (t785846927_0 * __this, t_1786876978_0 * p0, const MethodInfo* method)
{
	Il2CppObject *__result = il2cpp_delegate_end_invoke((Il2CppAsyncResult*) p0, 0);
	return *(int32_t*)UnBox ((Il2CppCodeGenObject*)__result);
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
